import { Request, Response } from "express";
import { ISchedulerService } from "../../application/ports/scheduler-service.interface";
import { CreatedSchedulerDTO } from "../dtos/created-scheduler.dto";

export class SchedulerController {
    constructor(private readonly schedulerService: ISchedulerService) { }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const dto = req.body as CreatedSchedulerDTO;

            const data = await this.schedulerService.create(dto);

            res.status(201).send({ message: 'Schedule Created Sucessfully', data })
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await this.schedulerService.getAll();
            res.status(200).send({ message: 'All appointments', data });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}