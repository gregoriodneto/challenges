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
        throw new Error("Method not implemented.");
    }

    async getAll(): Promise<Scheduling> {
        throw new Error("Method not implemented.");
    }
}