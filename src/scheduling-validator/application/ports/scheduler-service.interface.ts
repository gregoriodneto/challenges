import { Scheduling } from "../../domain/entities/scheduling";
import { CreatedSchedulerDTO } from "../../interface/dtos/created-scheduler.dto";

export interface ISchedulerService {
    create(dto: CreatedSchedulerDTO): Promise<Scheduling>;
    getAll(): Promise<Scheduling[]>;
}