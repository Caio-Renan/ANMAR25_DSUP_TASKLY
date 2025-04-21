import { Category } from '@prisma/client';
import { RepositoryFactory } from '../repositories/repositoryFactory.js';

export class CategoryService {
  private categoryRepository = RepositoryFactory.categoryRepository;

  async create(data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> {
    return this.categoryRepository.create(data);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async findById(id: number): Promise<Category | null> {
    return this.categoryRepository.findById(id);
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    return this.categoryRepository.update(id, data);
  }

  async delete(id: number): Promise<Category> {
    return this.categoryRepository.delete(id);
  }
}