import { idParamSchema, baseTaskSchema, statusParamSchema } from '../utils/validationHelpers';

export const createTaskSchema = baseTaskSchema.strict();

export const updateTaskSchema = baseTaskSchema.partial().strict();

export const findTaskByIdSchema = idParamSchema.strict();
  
export const findTasksByStatusSchema = statusParamSchema.strict();

export const deleteTaskSchema = idParamSchema.strict();