import { Scheduling } from "../../../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../../../domain/repositories/scheduling-repository.interface";
import { SchedulingSchema } from "../entities/scheduling.schema";
import { MapperScheduling } from "../mappers/scheduling.mappers";

export class InMemorySchedulingRepository implements ISchedulingRepository {
    database: SchedulingSchema[];

    constructor() {
        this.database = [];
    }
    
    async save(scheduler: Scheduling): Promise<Scheduling> {
        const schedulerSchema = MapperScheduling.toPlain(scheduler);
        this.database.push(schedulerSchema);
        return MapperScheduling.toEntity(schedulerSchema);
    }

    async getAll(): Promise<Scheduling[]> {
        return this.database.map(MapperScheduling.toEntity);
    }
}