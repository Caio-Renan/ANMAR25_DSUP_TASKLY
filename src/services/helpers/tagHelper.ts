import { prisma } from '../../database/prisma'
import CustomError from '../../utils/CustomError'

export const checkTagId = async (id: string) => {
    const numberId = Number(id);
    const tag = await prisma.tag.findUnique({ where: { id: numberId 
    }})
    if (!tag) {
      throw new CustomError(404, ['tag not found or it may have been deleted.']);
    }
}