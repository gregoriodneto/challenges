import { BadRequestException } from "../../../../../common/exceptions/bad-request.exception";

export class SchedulingSchema {
    constructor(
        readonly day: string,
        readonly hour: string,
        readonly durationMin: number,
        readonly _id: string = crypto.randomUUID()
    ) { 
        if (!day)
            throw new BadRequestException('Day field must be filled in');
        if (!hour)
            throw new BadRequestException('Hour field must be filled in');
        if (durationMin <= 0)
            throw new BadRequestException('Duration Minute field must be filled in');
    }
}