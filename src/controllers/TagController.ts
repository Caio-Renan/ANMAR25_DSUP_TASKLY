import { Request, Response, NextFunction } from 'express';
//import { TagService } from '../services/TagService.js';
import { ServiceFactory } from '../services/serviceFactory.js';
/*
export class TagController {
  private tagService: TagService;

  constructor() {
    this.tagService = ServiceFactory.tagService;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tagData = req.body;
      const tag = await this.tagService.create(tagData);
      res.status(201).json(tag);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tags = await this.tagService.findAll();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const tag = await this.tagService.findById(Number(id));
      if (tag) {
        res.status(200).json(tag);
      } else {
        res.status(404).json({ message: 'Tag not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const tagData = req.body;
      const updatedTag = await this.tagService.update(Number(id), tagData);
      res.status(200).json(updatedTag);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const deletedTag = await this.tagService.delete(Number(id));
      res.status(200).json(deletedTag);
    } catch (error) {
      next(error);
    }
  }
}
*/