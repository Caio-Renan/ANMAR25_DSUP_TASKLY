import { Category } from '@prisma/client';
import { prisma } from '../database/prisma.js';
import { IBaseRepository } from './IBaseRepository.js';
import { PaginationFilter } from './IBaseRepository.js';

export class CategoryRepository implements IBaseRepository<Category> {
  create(data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) {
    return prisma.category.create({ data });
  }

  async findAll({
    page = 1,
    limit = 10,
    search,
    sortBy = 'createdAt',
    sortDirection = 'asc',
  }: PaginationFilter): Promise<{ items: Category[]; total: number }> {
    const skip = (page - 1) * limit;

    const where = search
      ? {
          name: {
            contains: search,
          },
        }
      : {};

    const [items, total] = await Promise.all([
      prisma.category.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortDirection,
        },
      }),
      prisma.category.count({ where }),
    ]);

    return { items, total };
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
