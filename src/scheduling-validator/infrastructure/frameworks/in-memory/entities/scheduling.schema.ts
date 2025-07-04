export class SchedulingSchema {
    constructor(
        readonly day: string,
        readonly hour: string,
        readonly durationMin: number,
        readonly _id: string = crypto.randomUUID()
    ) { }
}