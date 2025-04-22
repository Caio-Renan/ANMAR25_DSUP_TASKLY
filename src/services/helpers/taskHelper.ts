import { prisma } from '../../database/prisma.js';
import CustomError from '../../utils/CustomError.js';

export const checkIfTaskIdExists = async (id: number) => {
  const numberId = Number(id);
  const task = await prisma.task.findUnique({ where: { id: numberId } });
  if (!task) {
    throw new CustomError(404, ['task not found or it may have been deleted.']);
  }
};
