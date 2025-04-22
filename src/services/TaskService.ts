import { Task, TaskStatus } from '@prisma/client';
import { RepositoryFactory } from '../repositories/repositoryFactory.js';
import { PaginationFilter } from '../repositories/IBaseRepository.js';
import { checkIfTaskIdExists } from './helpers/taskHelper.js';
export class TaskService {
  private taskRepository = RepositoryFactory.taskRepository;

  async create(
    data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Task> {
    return this.taskRepository.create(data);
  }

  async findAll(filter: PaginationFilter) {
    return this.taskRepository.findAll(filter);
  }

  async findById(id: number): Promise<Task | null> {
    await checkIfTaskIdExists(id);
    return this.taskRepository.findById(id);
  }

  async update(id: number, data: Partial<Task>): Promise<Task> {
    await checkIfTaskIdExists(id);
    return this.taskRepository.update(id, data);
  }

  async delete(id: number): Promise<Task> {
    await checkIfTaskIdExists(id);
    return this.taskRepository.delete(id);
  }

  async findByStatus({
    status,
    page = 1,
    limit = 10,
  }: {
    status: TaskStatus;
    page?: number;
    limit?: number;
  }): Promise<{ items: Task[]; total: number }> {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.taskRepository.findTasksByStatus({ status, skip, limit }),
      this.taskRepository.countTasksByStatus(status),
    ]);

    return { items, total };
  }
}
