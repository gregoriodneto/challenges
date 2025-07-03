import { Scheduling } from "../scheduling";

it('Should reject times before 08:00', () => {
    expect(() => new Scheduling('2025-07-03', '07:30', 30))
        .toThrow('Appointment time must be beetwen 08:00 and 17:30');
});

it ('Should reject times after 17:30', () => {
    expect(() => new Scheduling('2025-07-03', '17:45', 30))
        .toThrow('Appointment time must be beetwen 08:00 and 17:30');
});

it ('Should must make an Appointment', () => {
    const scheduler = new Scheduling('2025-07-03', '08:00', 30);
    expect(scheduler).toBeInstanceOf(Scheduling);
    expect(scheduler.day).toBe('2025-07-03');
    expect(scheduler.hour).toBe('08:00');
    expect(scheduler.durationMin).toBe(30);
})