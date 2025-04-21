import { TaskTag } from '@prisma/client';
import { RepositoryFactory } from '@repositories/repositoryFactory';

export class TaskTagService {
  private taskTagRepository = RepositoryFactory.taskTagRepository;

  async create(taskId: number, tagId: number): Promise<TaskTag> {
    return this.taskTagRepository.create(taskId, tagId);
  }

  async delete(taskId: number, tagId: number): Promise<TaskTag> {
    return this.taskTagRepository.delete(taskId, tagId);
  }
}