import { z } from 'zod';
import { TaskStatus, TaskPriority, TaskStatusValues, TaskPriorityValues } from '../enums/taskEnums';

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const taskIdSchema = z.object({
    taskId: z.coerce.number().int().positive(),
});
  
export const noteContentBaseSchema = z.object({
    content: z.string().min(1).max(500),
    isImportant: z.boolean().optional(),
});

export const nameSchema = z.object({
    name: z.string().trim().min(1).max(100),
});

export const baseTaskSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().max(500).optional(),
    status: z.enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]]),
    priority: z.enum(TaskPriorityValues as [TaskPriority, ...TaskPriority[]]),
    categoryId: z.coerce.number().int().positive(),
    dueDate: z.coerce.date().optional(),
    completedAt: z.coerce.date().optional(),
    isRecurring: z.boolean().optional(),
});

export const tagIdSchema = z.object({
    tagId: z.coerce.number().int().positive(),
});