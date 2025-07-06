import { Scheduling } from "../../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../../domain/repositories/scheduling-repository.interface";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { CreatedSchedulerDTO } from "../../../interface/dtos/created-scheduler.dto";
import { CreateSchedulingUseCase } from "../create-scheduling.use-case";
import { GetAllSchedulingUseCase } from "../get-all-scheduling.use-case";

let schedulingRepo: ISchedulingRepository;
let useCase: GetAllSchedulingUseCase;
let useCaseCreated: CreateSchedulingUseCase;

beforeEach(() => {
    schedulingRepo = new InMemorySchedulingRepository();
    useCase = new GetAllSchedulingUseCase(schedulingRepo);
    useCaseCreated = new CreateSchedulingUseCase(schedulingRepo);
});

it ('Should list an Scheduling in the use case', async () => {
    const schedulerDto = new CreatedSchedulerDTO('2025-07-06', '17:00', 30);
    const createSchedulerResult = await useCaseCreated.execute(schedulerDto);
    const getAllSchedules = await useCase.execute();
    expect(getAllSchedules[0]).toBeInstanceOf(Scheduling);
    expect(getAllSchedules[0].day).toBe(createSchedulerResult.day);
    expect(getAllSchedules[0].hour).toBe(createSchedulerResult.hour);
    expect(getAllSchedules[0].durationMin).toBe(createSchedulerResult.durationMin);
    expect(getAllSchedules[0].id).toBe(createSchedulerResult.id);
});