import { Scheduling } from "../scheduling";

it('Should reject times before 08:00', () => {
    expect(() => new Scheduling('2025-07-03', '07:30', 30))
        .toThrow(new Error('Appointment time must be beetwen 08:00 and 18:00'));
});

it ('Should reject times after 17:30', () => {
    expect(() => new Scheduling('2025-07-03', '18:10', 30))
        .toThrow(new Error('Appointment time must be beetwen 08:00 and 18:00'));
});

it ('Should reject it when the duration plus the time exceeds 18:00', () => {
    expect(() => new Scheduling('2025-07-04', '17:45', 30))
        .toThrow(new Error('Appointment exceeds closing time (18:00)'));
});

it ('Should generate an error if the Day field is empty', () => {
    expect(() => new Scheduling('', '17:00', 30))
        .toThrow(new Error('Day field must be filled in'));
});

it ('Should generate an error if the Hour field is empty', () => {
    expect(() => new Scheduling('2025-07-03', '', 30))
        .toThrow(new Error('Hour field must be filled in'));
});

it ('Should generate an error if the Duration Minutes field is empty', () => {
    expect(() => new Scheduling('2025-07-03', '17:00', 0))
        .toThrow(new Error('Duration Minute field must be filled in'));
});

it ('Should must make an Appointment', () => {
    const scheduler = new Scheduling('2025-07-03', '08:00', 30);
    expect(scheduler).toBeInstanceOf(Scheduling);
    expect(scheduler.day).toBe('2025-07-03');
    expect(scheduler.hour).toBe('08:00');
    expect(scheduler.durationMin).toBe(30);
})