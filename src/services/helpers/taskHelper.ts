import { prisma } from '../../database/prisma'
import CustomError from '../../utils/CustomError'

export const checkTaskId = async (id: string) => {
  const numberId = Number(id);
  const task = await prisma.task.findUnique({ where: { id: numberId 
  }})
  if (!task) {
    throw new CustomError(404, ['task not found or it may have been deleted.']);
  }
}
