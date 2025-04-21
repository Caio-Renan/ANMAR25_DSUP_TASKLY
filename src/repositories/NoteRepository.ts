import { Note } from '@prisma/client'
import { prisma } from '../database/prisma.js'
import { IBaseRepository } from './IBaseRepository.js'

export class NoteRepository implements IBaseRepository<Note> {
  async create(data: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
    return prisma.note.create({ data })
  }

  async findAll(filter: { taskId: number }): Promise<Note[]> {
    return prisma.note.findMany({ where: { ...filter } })
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