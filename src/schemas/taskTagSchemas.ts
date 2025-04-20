import { taskIdSchema, tagIdSchema } from '../utils/validationHelpers';

export const createTaskTagSchema = taskIdSchema.merge(tagIdSchema).strict();

export const deleteTaskTagSchema = taskIdSchema.merge(tagIdSchema).strict();