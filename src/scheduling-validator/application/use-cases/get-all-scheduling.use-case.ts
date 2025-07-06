import { Scheduling } from "../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../domain/repositories/scheduling-repository.interface";
import { IGetAllScheduling } from "../ports/get-all-scheduling.interface";

export class GetAllSchedulingUseCase implements IGetAllScheduling {
    constructor(private readonly schedulingRepo: ISchedulingRepository) { }

    async execute(): Promise<Scheduling[]> {
        return await this.schedulingRepo.getAll();
    }
}