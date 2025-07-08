import request from "supertest";
import app from "../../../../index";
import { GetAllSchedulingUseCase } from "../../../application/use-cases/get-all-scheduling.use-case";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";

describe('SchedulingController (e2e)', () => {
    it ('Should create an appointment successfully', async () => {
        const response = await request(app)
            .post('/scheduling')
            .send({
                day: '2025-07-08',
                hour: '17:00',
                durationMin: 30
            });

        expect(response.status).toBe(201);
        expect(response.body.data).toHaveProperty('day');
        expect(response.body.data).toHaveProperty('hour');
        expect(response.body.data).toHaveProperty('durationMin');
    });

    it ('Should error create an Scheduling', async () => {
        const response = await request(app)
            .post('/scheduling')
            .send({
                day: '',
                hour: '17:00',
                durationMin: 30
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

    it ('Should find all appointments', async () => {
        const response = await request(app)
            .get('/scheduling');
            
        expect(response.status).toBe(200);
        expect(response.body.data[0]).toHaveProperty('day');
        expect(response.body.data[0]).toHaveProperty('hour');
        expect(response.body.data[0]).toHaveProperty('durationMin');
    });

    it ('Should return 400 if schedule fetching fails', async () => {
        jest
            .spyOn(InMemorySchedulingRepository.prototype, 'getAll')
            .mockImplementation(() => {
                throw new Error('Something went wrong');
            });

        const response = await request(app)
            .get('/scheduling');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });
});