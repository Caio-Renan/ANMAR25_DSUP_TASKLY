import { taskIdSchema, tagIdSchema } from '../utils/validationHelpers.js';

export const createTaskTagSchema = taskIdSchema.merge(tagIdSchema).strict();

export const deleteTaskTagSchema = taskIdSchema.merge(tagIdSchema).strict();