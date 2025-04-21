import { Request, Response, NextFunction } from 'express';
import { TaskService } from '../services/TaskService';
import { TaskStatus } from '@prisma/client';
import { ServiceFactory } from '@services/serviceFactory';

export class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = ServiceFactory.taskService;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskData = req.body;
      const task = await this.taskService.create(taskData);
      res.status(201).json(task);
    } catch (error) {
        next(error);
    }
  }

  async findTasksByStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { status } = req.params;
      const tasks = await this.taskService.findByStatus(status as TaskStatus);
      res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const task = await this.taskService.findById(Number(id));
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
        next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const taskData = req.body;
      const updatedTask = await this.taskService.update(Number(id), taskData);
      res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const deletedTask = await this.taskService.delete(Number(id));
      res.status(200).json(deletedTask);
    } catch (error) {
        next(error);
    }
  }
}