import { Category } from '@prisma/client';
import { RepositoryFactory } from '../repositories/repositoryFactory.js';
import { checkCategoryIdExists, checkCategoryNameExists, checkCategoryCanBeDeleted } from './helpers/categoryHelper.js'
import { PaginationFilter } from '../repositories/IBaseRepository.js'
export class CategoryService {
  private categoryRepository = RepositoryFactory.categoryRepository;

  async create(data: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> {
    const name = data.name;
    await checkCategoryNameExists(name);
    return this.categoryRepository.create(data);
  }

  async findAll(filter: PaginationFilter): Promise<{ items: Category[]; total: number }> {
    return this.categoryRepository.findAll(filter);
  }
  

  async findById(id: number): Promise<Category | null> {
    await checkCategoryIdExists(id);
    return this.categoryRepository.findById(id);
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    await checkCategoryIdExists(id);
    const name = data.name;
    if (name) {
        await checkCategoryNameExists(name);
    }
    return this.categoryRepository.update(id, data);
  }

  async delete(id: number): Promise<Category> {
    await checkCategoryIdExists(id);
    await checkCategoryCanBeDeleted(id);
    return this.categoryRepository.delete(id);
  }
}