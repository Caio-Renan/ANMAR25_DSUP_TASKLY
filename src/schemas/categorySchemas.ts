import { idParamSchema, nameSchema } from '../utils/validationHelpers.js';

export const createCategorySchema = nameSchema.strict();

export const updateCategorySchema = nameSchema.partial().strict();

export const findCategoryByIdSchema = idParamSchema.strict();
export const deleteCategorySchema = idParamSchema.strict();