import { Tag } from '@prisma/client';
import { RepositoryFactory } from '../repositories/repositoryFactory.js';
/*
export class TagService {
  private tagRepository = RepositoryFactory.tagRepository;

  async create(data: Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tag> {
    return this.tagRepository.create(data);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.findAll();
  }

  async findById(id: number): Promise<Tag | null> {
    return this.tagRepository.findById(id);
  }

  async update(id: number, data: Partial<Tag>): Promise<Tag> {
    return this.tagRepository.update(id, data);
  }

  async delete(id: number): Promise<Tag> {
    return this.tagRepository.delete(id);
  }
}
*/