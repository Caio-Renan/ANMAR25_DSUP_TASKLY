import { z } from 'zod';
import {
  TaskStatus,
  TaskPriority,
  TaskStatusValues,
  TaskPriorityValues,
} from '../enums/taskEnums.js';
import { validationMessages } from '../constants/validationMessages.js';

export const idParamSchema = z.object({
  id: z.coerce
    .number()
    .int({ message: validationMessages.number.int('id') })
    .positive({ message: validationMessages.number.positiveNumber('id') }),
});

export const taskIdSchema = z.object({
  taskId: z.coerce
    .number()
    .int({ message: validationMessages.number.int('taskId') })
    .positive({ message: validationMessages.number.positiveNumber('taskId') }),
});

export const noteContentBaseSchema = z.object({
  content: z
    .string({
      required_error: validationMessages.required('content'),
    })
    .trim()
    .min(1, { message: validationMessages.required('content') })
    .max(500, { message: validationMessages.string.maxLength('content', 500) }),
  isImportant: z.boolean().optional(),
});

export const nameSchema = z.object({
  name: z
    .string({
      required_error: validationMessages.required('name'),
    })
    .trim()
    .min(1, { message: validationMessages.required('name') })
    .max(100, { message: validationMessages.string.maxLength('name', 100) }),
});

export const baseTaskSchema = z.object({
  title: z
    .string({
      required_error: validationMessages.required('title'),
    })
    .trim()
    .min(1, { message: validationMessages.required('title') })
    .max(100, { message: validationMessages.string.maxLength('title', 100) }),
  description: z
    .string()
    .max(500, {
      message: validationMessages.string.maxLength('description', 500),
    })
    .optional(),
  status: z
    .enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]], {
      errorMap: () => ({ message: validationMessages.enums.status('status') }),
    })
    .default(TaskStatus.TODO),
  priority: z.enum(TaskPriorityValues as [TaskPriority, ...TaskPriority[]], {
    errorMap: () => ({
      message: validationMessages.enums.priority('priority'),
    }),
  }),
  categoryId: z.coerce
    .number({ required_error: validationMessages.required('categoryId') })
    .int({ message: validationMessages.number.int('categoryId') })
    .positive({
      message: validationMessages.number.positiveNumber('categoryId'),
    }),
  dueDate: z.coerce
    .date({ message: validationMessages.date('dueDate') })
    .optional(),
  completedAt: z.coerce
    .date({ message: validationMessages.date('completedAt') })
    .optional(),
  isRecurring: z.boolean().optional(),
});

export const statusParamSchema = z.object({
  status: z.enum(TaskStatusValues as [TaskStatus, ...TaskStatus[]], {
    errorMap: () => ({ message: validationMessages.enums.status('status') }),
  }),
});

export const basePaginationSchema = z.object({
  page: z
    .string()
    .optional()
    .transform(val => (val ? parseInt(val, 10) : 1))
    .refine(val => !isNaN(val!) && val! > 0, {
      message: 'page must be a positive number',
    }),

  limit: z
    .string()
    .optional()
    .transform(val => (val ? parseInt(val, 10) : 10))
    .refine(val => !isNaN(val!) && val! > 0, {
      message: 'limit must be a positive number',
    }),

  search: z.string().optional(),

  sortDirection: z.enum(['asc', 'desc']).optional(),
});

export const categoryPaginationSchema = z.object({
  sortBy: z.enum(['id', 'name', 'createdAt', 'updatedAt']).default('createdAt'),
});

export const notePaginationSchema = z.object({
  sortBy: z
    .enum(['id', 'content', 'isImportant', 'createdAt', 'updatedAt'])
    .default('createdAt'),
});

export const taskPaginationSchema = z.object({
  priority: z
    .string()
    .optional()
    .transform(val =>
      TaskPriorityValues.includes(val as TaskPriority) ? val : undefined
    )
    .refine(
      val =>
        val === undefined || TaskPriorityValues.includes(val as TaskPriority),
      {
        message: validationMessages.enums.priority('priority'),
      }
    )
    .transform(val => (val ? (val as TaskPriority) : undefined))
    .optional(),
  sortBy: z
    .enum(['title', 'description', 'priority', 'createdAt', 'updatedAt'])
    .default('createdAt'),
  description: z.string().optional(),
});
