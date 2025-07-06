import { Scheduling } from "../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../domain/repositories/scheduling-repository.interface";
import { CreatedSchedulerDTO } from "../../interface/dtos/created-scheduler.dto";
import { ICreateScheduling } from "../ports/create-scheduling.interface";

export class CreateSchedulingUseCase implements ICreateScheduling {
    constructor(private readonly schedulingRepo: ISchedulingRepository) { }

    async execute(dto: CreatedSchedulerDTO): Promise<Scheduling> {
        const scheduler = new Scheduling(dto.day, dto.hour, dto.durationMin);
        return await this.schedulingRepo.save(scheduler);
    }
}