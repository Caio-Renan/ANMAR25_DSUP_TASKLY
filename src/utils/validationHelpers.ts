import { z } from 'zod';
import { TaskStatus, TaskPriority, TaskStatusValues, TaskPriorityValues } from '../enums/taskEnums.js';
import { validationMessages } from '../constants/validationMessages.js';

export const idParamSchema = z.object({
    id: z.coerce.number()
      .int({ message: validationMessages.number.int('id') })
      .positive({ message: validationMessages.number.positiveNumber('id') }),
});
  
export const taskIdSchema = z.object({
    taskId: z.coerce.number()
      .int({ message: validationMessages.number.int('taskId') })
      .positive({ message: validationMessages.number.positiveNumber('taskId') }),
});
  
export const noteContentBaseSchema = z.object({
    content: z.string({
        required_error: validationMessages.required('content'),
      }).trim().min(1, { message: validationMessages.required('content') })
      .max(500, { message: validationMessages.string.maxLength('content', 500) }),
    isImportant: z.boolean().optional(),
});
  
export const nameSchema = z.object({
    name: z.string({
        required_error: validationMessages.required('name'),
      })
      .trim()
      .min(1, { message: validationMessages.required('name') })
      .max(100, { message: validationMessages.string.maxLength('name', 100) }),
});
  
export const baseTaskSchema = z.object({
    title: z.string({
        required_error: validationMessages.required('title'),
      }).trim().min(1, { message: validationMessages.required('title') })
      .max(100, { message: validationMessages.string.maxLength('title', 100) }),
    description: z.string()
      .max(500, { message: validationMessages.string.maxLength('description', 500) })
      .optional(),
    status: z.enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]], {
      errorMap: () => ({ message: validationMessages.enums.status('status') }),
    }),
    priority: z.enum(TaskPriorityValues as [TaskPriority, ...TaskPriority[]], {
      errorMap: () => ({ message: validationMessages.enums.priority('priority') }),
    }),
    categoryId: z.coerce.number()
      .int({ message: validationMessages.number.int('categoryId') })
      .positive({ message: validationMessages.number.positiveNumber('categoryId') }),
    dueDate: z.coerce.date({ message: validationMessages.date('dueDate') }).optional(),
    completedAt: z.coerce.date({ message: validationMessages.date('completedAt') }).optional(),
    isRecurring: z.boolean().optional(),
});
  
export const tagIdSchema = z.object({
    tagId: z.coerce.number()
      .int({ message: validationMessages.number.int('tagId') })
      .positive({ message: validationMessages.number.positiveNumber('tagId') }),
});

export const statusParamSchema = z.object({
    status: z.enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]], {
      errorMap: () => ({ message: validationMessages.enums.status('status') }),
    }),
});
  