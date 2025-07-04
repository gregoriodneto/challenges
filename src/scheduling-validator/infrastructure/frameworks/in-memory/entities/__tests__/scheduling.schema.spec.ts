import { SchedulingSchema } from "../scheduling.schema";

it ('Should generate an error with an invalid Day field', () => {
    const _id = crypto.randomUUID();
    expect(() => new SchedulingSchema('', '17:00', 30, _id))
        .toThrow(new Error('Day field must be filled in'));
});

it ('Should generate an error with an invalid Hour field', () => {
    const _id = crypto.randomUUID();
    expect(() => new SchedulingSchema('2025-07-04', '', 30, _id))
        .toThrow(new Error('Hour field must be filled in'));
});

it ('Should generate an error with an invalid Duration Minute field', () => {
    const _id = crypto.randomUUID();
    expect(() => new SchedulingSchema('2025-07-04', '17:00', 0, _id))
        .toThrow(new Error('Duration Minute field must be filled in'));
});

it ('Should must make Appointment', () => {
    const _id = crypto.randomUUID();
    const scheduler = new SchedulingSchema('2025-07-04', '17:00', 30, _id);
    expect(scheduler._id).toBe(_id);
    expect(scheduler.day).toBe('2025-07-04');
    expect(scheduler.hour).toBe('17:00');
    expect(scheduler.durationMin).toBe(30);
});