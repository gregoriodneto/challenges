import { BadRequestException } from "../../../common/exceptions/bad-request.exception";
import { DateAndTimeConverterUtil } from "../../../common/utils/date-and-time-converter.util"

export class Scheduling {
    constructor(
        readonly day: string,
        readonly hour: string,
        readonly durationMin: number
    ) { 
        const start = DateAndTimeConverterUtil.toDate(hour);
        const min = DateAndTimeConverterUtil.toDate('08:00');
        const max = DateAndTimeConverterUtil.toDate('18:00');

        const insideWindow = start >= min && start <= max;
        if (!insideWindow) {
            throw new BadRequestException('Appointment time must be beetwen 08:00 and 18:00');
        }

        const end = new Date(start.getTime() + durationMin * 60_000);
        const closing = DateAndTimeConverterUtil.toDate('18:00');
        if (end > closing) {
            throw new BadRequestException('Appointment exceeds closing time (18:00)');
        }
    }
}