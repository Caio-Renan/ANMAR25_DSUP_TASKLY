import { Category } from '@prisma/client';
import { prisma } from '../database/prisma.js';
import { IBaseRepository } from './IBaseRepository.js';

export class CategoryRepository implements IBaseRepository<Category> {
  create(data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) {
    return prisma.category.create({ data });
  }

  findAll() {
    return prisma.category.findMany();
  }

  findById(id: number) {
    return prisma.category.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<Category>) {
    return prisma.category.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.category.delete({ where: { id } });
  }
}