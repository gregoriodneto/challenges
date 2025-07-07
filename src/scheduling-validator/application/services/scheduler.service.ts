import { Scheduling } from "../../domain/entities/scheduling";
import { CreatedSchedulerDTO } from "../../interface/dtos/created-scheduler.dto";
import { ISchedulerService } from "../ports/scheduler-service.interface";
import { CreateSchedulingUseCase } from "../use-cases/create-scheduling.use-case";
import { GetAllSchedulingUseCase } from "../use-cases/get-all-scheduling.use-case";

export class SchedulerService implements ISchedulerService {
    constructor(
        private readonly createSchedulerUC: CreateSchedulingUseCase,
        private readonly getAllSchedulersUC: GetAllSchedulingUseCase
    ) { }

    async create(dto: CreatedSchedulerDTO): Promise<Scheduling> {
        return await this.createSchedulerUC.execute(dto);
    }

    async getAll(): Promise<Scheduling[]> {
        return await this.getAllSchedulersUC.execute();
    }
}