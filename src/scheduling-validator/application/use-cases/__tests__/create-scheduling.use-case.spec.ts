import { Scheduling } from "../../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../../domain/repositories/scheduling-repository.interface";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { CreatedSchedulerDTO } from "../../../interface/dtos/created-scheduler.dto";
import { CreateSchedulingUseCase } from "../create-scheduling.use-case";

let schedulingRepo: ISchedulingRepository;
let useCase: CreateSchedulingUseCase;

beforeEach(() => {
    schedulingRepo = new InMemorySchedulingRepository();
    useCase = new CreateSchedulingUseCase(schedulingRepo);
});

it ('Should create an Scheduling in the use case', async () => {
    const schedulerDto = new CreatedSchedulerDTO('2025-07-06', '17:00', 30);
    const createSchedulerResult = await useCase.execute(schedulerDto);
    expect(createSchedulerResult).toBeInstanceOf(Scheduling);
    expect(createSchedulerResult.day).toBe(schedulerDto.day);
    expect(createSchedulerResult.hour).toBe(schedulerDto.hour);
    expect(createSchedulerResult.durationMin).toBe(schedulerDto.durationMin);
});