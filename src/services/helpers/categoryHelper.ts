import { prisma } from '../../database/prisma'
import CustomError from '../../utils/CustomError'

export const checkIfCategoryIdExists = async (id: number) => {;
    const category = await prisma.category.findUnique({ where: { id }})
    if (!category) {
      throw new CustomError(404, ['category not found or it may have been deleted.']);
    }
    return category;
}

export const checkIfCategoryNameExists = async (name: string) => {;
    const category = await prisma.category.findUnique({ where: { name }})
    if (category) {
      throw new CustomError(409, ['category with this name already exists.']);
    }
    return category;
}

export const checkIfCategoryCanBeDeleted = async (id: number) => {
    const tasksCount = await prisma.task.count({
      where: { categoryId: id },
    });
  
    if (tasksCount > 0) {
      throw new CustomError(400, [
        'cannot delete category with associated tasks.',
      ]);
    }
};