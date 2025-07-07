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
    await expect(schedulerService.create)
        .rejects
        .toThrow(new Error("Method not implemented."));
});

it ('Should fetch all Schedulers', async () => {
    await expect(schedulerService.getAll)
        .rejects
        .toThrow(new Error("Method not implemented."));
});