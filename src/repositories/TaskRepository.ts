import { prisma } from '@database/prisma'
import { Task } from '@prisma/client'
import { IBaseRepository } from '@repositories/IBaseRepository'

export class TaskRepository implements IBaseRepository<Task> {
  async create(data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    return prisma.task.create({ data })
  }

  async findAll(): Promise<Task[]> {
    return prisma.task.findMany()
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