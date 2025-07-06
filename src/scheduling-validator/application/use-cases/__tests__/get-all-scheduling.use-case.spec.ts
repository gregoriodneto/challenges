import { ISchedulingRepository } from "../../../domain/repositories/scheduling-repository.interface";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { GetAllSchedulingUseCase } from "../get-all-scheduling.use-case";

let schedulingRepo: ISchedulingRepository;
let useCase: GetAllSchedulingUseCase;

beforeEach(() => {
    schedulingRepo = new InMemorySchedulingRepository();
    useCase = new GetAllSchedulingUseCase(schedulingRepo);
});

it ('Should list an Scheduling in the use case', async () => {
    await expect(useCase.execute)
        .rejects
        .toThrow(new Error("Method not implemented."));
});