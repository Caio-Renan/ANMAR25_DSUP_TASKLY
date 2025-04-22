import { Task, TaskStatus } from '@prisma/client'
import { prisma } from '../database/prisma.js'
import { IBaseRepository } from './IBaseRepository.js'
import { PaginationFilter } from './IBaseRepository.js'
export class TaskRepository implements IBaseRepository<Task> {
  async create(data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    return prisma.task.create({ data })
  }

  async findAll(filter: PaginationFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'createdAt',
      sortDirection = 'asc',
      priority,
      description,
    } = filter;

    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        OR: [
          { title: { contains: search } },
        ],
      }),
      ...(priority && {
        priority: { equals: priority },
      }),
      ...(description && {
        description: { contains: description },
      }),
    };

    const [items, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortDirection },
      }),
      prisma.task.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
    };
  }

  async findTasksByStatus({
    status,
    skip,
    limit,
  }: {
    status: TaskStatus;
    skip: number;
    limit: number;
  }): Promise<Task[]> {
    return prisma.task.findMany({
      where: {
        status,
      },
      skip,
      take: limit,
    });
  }
  
  async countTasksByStatus(status: TaskStatus): Promise<number> {
    return prisma.task.count({
      where: {
        status,
      },
    });
  }
  

  async findById(id: number): Promise<Task | null> {
    return prisma.task.findUnique({ where: { id } })
  }

  async update(id: number, data: Partial<Task>): Promise<Task> {
    return prisma.task.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Task> {
    return prisma.task.delete({ where: { id } })
  }
}