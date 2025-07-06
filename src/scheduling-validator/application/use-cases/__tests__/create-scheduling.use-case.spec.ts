import { ISchedulingRepository } from "../../../domain/repositories/scheduling-repository.interface";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { CreateSchedulingUseCase } from "../create-scheduling.use-case";

let schedulingRepo: ISchedulingRepository;
let useCase: CreateSchedulingUseCase;

beforeEach(() => {
    schedulingRepo = new InMemorySchedulingRepository();
    useCase = new CreateSchedulingUseCase(schedulingRepo);
});

it ('Should create an Scheduling in the use case', async () => {
    await expect(useCase.execute)
        .rejects
        .toThrow(new Error("Method not implemented."));
});