import { Request, Response, NextFunction } from 'express';
import { TaskTagService } from '../services/TaskTagService';
import { ServiceFactory } from '@services/serviceFactory';

export class TaskTagController {
  private taskTagService: TaskTagService;

  constructor() {
    this.taskTagService = ServiceFactory.taskTagService;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId } = req.params;
      const { tagId } = req.body;
      const taskTag = await this.taskTagService.create(Number(taskId), Number(tagId));
      res.status(201).json(taskTag);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { taskId, tagId } = req.params;
      const deletedTaskTag = await this.taskTagService.delete(Number(taskId), Number(tagId));
      res.status(200).json(deletedTaskTag);
    } catch (error) {
      next(error);
    }
  }
}