import { z } from 'zod';
import { TaskStatus, TaskStatusValues } from '../enums/taskEnums';
import { idParamSchema, baseTaskSchema } from '../utils/validationHelpers';

export const createTaskSchema = baseTaskSchema.strict();

export const updateTaskSchema = baseTaskSchema.partial().strict();

export const findTaskByIdSchema = idParamSchema.strict();
  
export const findTasksByStatusSchema = z.object({
    status: z.enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]]),
}).strict();

export const deleteTaskSchema = idParamSchema.strict();