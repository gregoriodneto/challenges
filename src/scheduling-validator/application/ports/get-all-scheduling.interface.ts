import { Scheduling } from "../../domain/entities/scheduling";

export interface IGetAllScheduling {
    execute(): Promise<Scheduling[]>;
}