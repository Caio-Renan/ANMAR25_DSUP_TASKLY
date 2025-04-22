import { Note } from '@prisma/client'
import { prisma } from '../database/prisma.js'
import { PaginationFilter } from '../repositories/IBaseRepository.js'
import { INoteRepository } from './IBaseRepository.js'
export class NoteRepository implements INoteRepository<Note> {
  async create(data: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> & { taskId: number }): Promise<Note> {
    return prisma.note.create({
      data: {
        content: data.content,
        isImportant: data.isImportant,
        task: {
          connect: {
            id: data.taskId,
          }
        }
      }
    });
  }
  
  async findAll(
    filter: { taskId: number },
    { page = 1, limit = 10, search, sortBy = 'createdAt', sortDirection = 'asc' }: PaginationFilter
  ): Promise<{ items: Note[]; total: number }> {
    const skip = (page - 1) * limit;
  
    const where = {
      taskId: filter.taskId,
      ...(search && {
        name: {
          contains: search,
        },
      }),
    };
  
    const [items, total] = await Promise.all([
      prisma.note.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortDirection,
        },
      }),
      prisma.note.count({ where }),
    ]);
  
    return { items, total };
  }
  

  async findById(id: number): Promise<Note | null> {
    return prisma.note.findUnique({ where: { id } })
  }

  async update(id: number, data: Partial<Note>): Promise<Note> {
    return prisma.note.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Note> {
    return prisma.note.delete({ where: { id } })
  }
}