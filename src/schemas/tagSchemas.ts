import { idParamSchema, nameSchema } from '../utils/validationHelpers';

export const createTagSchema = nameSchema.strict();

export const findTagSchema = nameSchema.partial().strict();

export const getTagByIdSchema = idParamSchema.strict();

export const deleteTagSchema = idParamSchema.strict();