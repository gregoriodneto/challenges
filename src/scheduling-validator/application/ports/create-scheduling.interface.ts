import { Scheduling } from "../../domain/entities/scheduling";

export interface ICreateScheduling {
    execute(): Promise<Scheduling>;
}