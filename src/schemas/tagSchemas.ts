import { idParamSchema, nameSchema } from '../utils/validationHelpers';

export const createTagSchema = nameSchema.strict();

export const updateTagSchema = nameSchema.partial().strict();

export const findTagByIdSchema = idParamSchema.strict();

export const deleteTagSchema = idParamSchema.strict();