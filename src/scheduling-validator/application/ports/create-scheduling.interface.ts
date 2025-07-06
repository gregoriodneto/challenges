import { Scheduling } from "../../domain/entities/scheduling";
import { CreatedSchedulerDTO } from "../../interface/dtos/created-scheduler.dto";

export interface ICreateScheduling {
    execute(dto: CreatedSchedulerDTO): Promise<Scheduling>;
}