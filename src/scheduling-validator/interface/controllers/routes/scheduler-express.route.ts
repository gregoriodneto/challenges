import express from "express";
import { InMemorySchedulingRepository } from "../../../infrastructure/frameworks/in-memory/repositories/in-memory-scheduling.repository";
import { CreateSchedulingUseCase } from "../../../application/use-cases/create-scheduling.use-case";
import { GetAllSchedulingUseCase } from "../../../application/use-cases/get-all-scheduling.use-case";
import { SchedulerService } from "../../../application/services/scheduler.service";
import { SchedulerController } from "../scheduler.controller";

const inMemoryRepo = new InMemorySchedulingRepository();
const createdSchedulerUC = new CreateSchedulingUseCase(inMemoryRepo);
const getAllSchedulerUC = new GetAllSchedulingUseCase(inMemoryRepo);
const schedulerService = new SchedulerService(
    createdSchedulerUC,
    getAllSchedulerUC
);
const schedullerController = new SchedulerController(schedulerService);

const router = express.Router();

router.post('/scheduling', (req, res) => schedullerController.create(req, res));
router.get('/scheduling', (req, res) => schedullerController.getAll(req, res));

export default router;