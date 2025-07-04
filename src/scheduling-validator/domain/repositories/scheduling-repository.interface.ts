import { Scheduling } from "../entities/scheduling";

export interface ISchedulingRepository {
    save(scheduler: Scheduling): Promise<Scheduling>;
    getAll(): Promise<Scheduling[]>;
}