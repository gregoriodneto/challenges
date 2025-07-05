import { Scheduling } from "../../../../../domain/entities/scheduling";
import { MapperScheduling } from "../../mappers/scheduling.mappers";
import { InMemorySchedulingRepository } from "../in-memory-scheduling.repository";

let inMemorySchedulingRepository: InMemorySchedulingRepository;

beforeEach(() => {
    inMemorySchedulingRepository = new InMemorySchedulingRepository();
});

it ('Should save an Scheduler to the repository', async () => {
    const scheduling = new Scheduling('2025-07-06', '17:00', 30);
    const schedulingSave = await inMemorySchedulingRepository.save(scheduling);
    expect(schedulingSave).toBeInstanceOf(Scheduling);
    expect(schedulingSave.day).toBe(scheduling.day);
    expect(schedulingSave.hour).toBe(scheduling.hour);
    expect(schedulingSave.durationMin).toBe(scheduling.durationMin);
    expect(schedulingSave.id).not.toBeNull();
});

it ('Should generate the Schedule list', async () => {
    const scheduling = new Scheduling('2025-07-06', '17:00', 30);
    const schedulingSave = await inMemorySchedulingRepository.save(scheduling);
    const schedules = await inMemorySchedulingRepository.getAll();
    expect(schedules.length).toBe(1);
    expect(schedulingSave.day).toBe(schedules[0].day);
    expect(schedulingSave.hour).toBe(schedules[0].hour);
    expect(schedulingSave.durationMin).toBe(schedules[0].durationMin);
    expect(schedulingSave.id).toBe(schedules[0].id);
});