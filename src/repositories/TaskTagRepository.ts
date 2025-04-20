import { prisma } from '@database/prisma'
import { TaskTag } from '@prisma/client';

export class TaskTagRepository {
  async create(taskId: number, tagId: number): Promise<TaskTag> {
    return await prisma.taskTag.create({
      data: {
        taskId,
        tagId,
      },
    });
  }

  async delete(taskId: number, tagId: number): Promise<TaskTag> {
    return await prisma.taskTag.delete({
      where: {
        taskId_tagId: {
          taskId,
          tagId,
        },
      },
    });
  }
}