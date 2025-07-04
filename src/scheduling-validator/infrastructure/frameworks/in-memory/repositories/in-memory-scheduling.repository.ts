import { Scheduling } from "../../../../domain/entities/scheduling";
import { ISchedulingRepository } from "../../../../domain/repositories/scheduling-repository.interface";
import { SchedulingSchema } from "../entities/scheduling.schema";

export class InMemorySchedulingRepository implements ISchedulingRepository {
    database: SchedulingSchema[] = [];
    
    save(scheduler: Scheduling): Promise<Scheduling> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<Scheduling[]> {
        throw new Error("Method not implemented.");
    }
}