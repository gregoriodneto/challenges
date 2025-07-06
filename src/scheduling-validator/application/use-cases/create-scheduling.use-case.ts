import { Scheduling } from "../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../domain/repositories/scheduling-repository.interface";
import { ICreateScheduling } from "../ports/create-scheduling.interface";

export class CreateSchedulingUseCase implements ICreateScheduling {
    constructor(private readonly schedulingRepo: ISchedulingRepository) { }

    async execute(): Promise<Scheduling> {
        throw new Error("Method not implemented.");
    }
}