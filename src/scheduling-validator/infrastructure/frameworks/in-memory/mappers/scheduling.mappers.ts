import { Scheduling } from "../../../../domain/entities/scheduling";
import { SchedulingSchema } from "../entities/scheduling.schema";

export class SchedulingMappers {
    toEntity(dto: SchedulingSchema): Scheduling {
        return new Scheduling(
            dto.day,
            dto.hour,
            dto.durationMin,
            dto._id
        );
    }

    toPlain(entity: Scheduling): Record<string, any> {
        return {
            day: entity.day,
            hour: entity.hour,
            durationMin: entity.durationMin
        };
    }
}