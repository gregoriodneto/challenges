import { Scheduling } from "../../../../domain/entities/scheduling";
import { SchedulingSchema } from "../entities/scheduling.schema";

export class MapperScheduling {
    static toEntity(dto: SchedulingSchema): Scheduling {
        return new Scheduling(
            dto.day,
            dto.hour,
            dto.durationMin,
            dto._id
        );
    }

    static toPlain(entity: Scheduling): SchedulingSchema {
        return new SchedulingSchema(
            entity.day,
            entity.hour,
            entity.durationMin
        );
    }
}