import { Tag } from '@prisma/client';
import { prisma } from '@database/prisma';
import { IBaseRepository } from '@repositories/IBaseRepository';

export class TagRepository implements IBaseRepository<Tag> {
  create(data: Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>) {
    return prisma.tag.create({ data });
  }

  findAll() {
    return prisma.tag.findMany();
  }

  findById(id: number) {
    return prisma.tag.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<Tag>) {
    return prisma.tag.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.tag.delete({ where: { id } });
  }
}