import { Note } from '@prisma/client';
import { RepositoryFactory } from '../repositories/repositoryFactory.js';
import { PaginationFilter } from '../repositories/IBaseRepository.js'

export class NoteService {
  private noteRepository = RepositoryFactory.noteRepository;

  async create(taskId: number, data: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
    return this.noteRepository.create({ ...data, taskId });
  }

  async findAllByTaskId(taskId: number, pagination: PaginationFilter): Promise<{ items: Note[]; total: number }> {
    return this.noteRepository.findAll({taskId}, pagination);
  }

  async findById(id: number): Promise<Note | null> {
    return this.noteRepository.findById(id);
  }

  async update(id: number, data: Partial<Note>): Promise<Note> {
    return this.noteRepository.update(id, data);
  }

  async delete(id: number): Promise<Note> {
    return this.noteRepository.delete(id);
  }
}