import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../services/CategoryService.js';
import { ServiceFactory } from '../services/serviceFactory.js';

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = ServiceFactory.categoryService;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const categoryData = req.body;
      const category = await this.categoryService.create(categoryData);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const {
        page = 1,
        limit = 10,
        search,
        sortBy,
        sortDirection,
      } = req.query as any;
      const categories = await this.categoryService.findAll({
        page: Number(page),
        limit: Number(limit),
        search,
        sortBy,
        sortDirection,
      });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  };

  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const category = await this.categoryService.findById(Number(id));

      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const categoryData = req.body;
      const updatedCategory = await this.categoryService.update(
        Number(id),
        categoryData
      );

      res.status(200).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const deletedCategory = await this.categoryService.delete(Number(id));
      res.status(200).json(deletedCategory);
    } catch (error) {
      next(error);
    }
  }
}
