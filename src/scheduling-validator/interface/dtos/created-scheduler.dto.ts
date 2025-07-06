export class CreatedSchedulerDTO {
    constructor(
        readonly day: string,
        readonly hour: string,
        readonly durationMin: number,
    ) { }
}