import { prisma } from '../../database/prisma'
import CustomError from '../../utils/CustomError'

export const checkNoteId = async (id: string) => {
    const numberId = Number(id);
    const note = await prisma.note.findUnique({ where: { id: numberId 
    }})
    if (!note) {
      throw new CustomError(404, ['note not found or it may have been deleted.']);
    }
}