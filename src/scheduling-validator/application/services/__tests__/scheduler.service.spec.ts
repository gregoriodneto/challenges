import { Scheduling } from "../../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../../domain/repositories/scheduling-repository.interface";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { CreatedSchedulerDTO } from "../../../interface/dtos/created-scheduler.dto";
import { CreateSchedulingUseCase } from "../../use-cases/create-scheduling.use-case";
import { GetAllSchedulingUseCase } from "../../use-cases/get-all-scheduling.use-case";
import { SchedulerService } from "../scheduler.service";

let schedulerService: SchedulerService;
let createdSchedulerUC: CreateSchedulingUseCase;
let getAllSchedulerUC: GetAllSchedulingUseCase;
let inMemorySchedulerRepo: ISchedulingRepository;

beforeEach(() => {
    inMemorySchedulerRepo = new InMemorySchedulingRepository();
    createdSchedulerUC = new CreateSchedulingUseCase(inMemorySchedulerRepo);
    getAllSchedulerUC = new GetAllSchedulingUseCase(inMemorySchedulerRepo);
    schedulerService = new SchedulerService(createdSchedulerUC, getAllSchedulerUC);
});

it ('Should create an Scheduler', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-07', '17:00', 30);
    const result = await schedulerService.create(dto);
    expect(result).toBeInstanceOf(Scheduling);
    expect(result.day).toBe('2025-07-07');
    expect(result.hour).toBe('17:00');
    expect(result.durationMin).toBe(30);
});

it ('Should fetch all Schedulers', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-07', '17:00', 30);
    const resultCreated = await schedulerService.create(dto);
    const schedulers = await schedulerService.getAll();
    expect(schedulers[0]).toBeInstanceOf(Scheduling);
    expect(schedulers[0].day).toBe('2025-07-07');
    expect(schedulers[0].hour).toBe('17:00');
    expect(schedulers[0].durationMin).toBe(30);
});

it ('Should generate an error if the Day field is empty', async () => {
    const dto = new CreatedSchedulerDTO('', '17:00', 30);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Day field must be filled in'));
});

it ('Should generate an error if the Hour field is empty', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-07', '', 30);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Hour field must be filled in'));
});

it ('Should generate an error if the Duration Minutes field is empty', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-07', '17:00', 0);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Duration Minute field must be filled in'));
});

it('Should reject times before 08:00', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-03', '07:30', 30);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Appointment time must be beetwen 08:00 and 18:00'));
});

it ('Should reject times after 17:30', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-03', '18:10', 30);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Appointment time must be beetwen 08:00 and 18:00'));
});

it ('Should reject it when the duration plus the time exceeds 18:00', async () => {
    const dto = new CreatedSchedulerDTO('2025-07-04', '17:45', 30);
    await expect(() => schedulerService.create(dto))
        .rejects
        .toThrow(new Error('Appointment exceeds closing time (18:00)'));
});