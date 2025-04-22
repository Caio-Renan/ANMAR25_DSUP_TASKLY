import { z } from 'zod';
import {
  basePaginationSchema,
  categoryPaginationSchema,
  taskPaginationSchema,
  notePaginationSchema,
} from '../utils/validationHelpers.js';

export const paginationCategoryQuerySchema = basePaginationSchema
  .merge(categoryPaginationSchema)
  .strict();
export const paginationTaskQuerySchema = basePaginationSchema
  .merge(taskPaginationSchema)
  .strict();
export const paginationNoteQuerySchema = basePaginationSchema
  .merge(notePaginationSchema)
  .strict();
export const paginationTaskStatusQuerySchema = basePaginationSchema.strict();

export type CategoryPaginationQuery = z.infer<
  typeof paginationCategoryQuerySchema
>;
export type TaskPaginationQuery = z.infer<typeof paginationTaskQuerySchema>;
export type NotePaginationQuery = z.infer<typeof paginationNoteQuerySchema>;
export type TaskStatusPaginationQuery = z.infer<
  typeof paginationTaskStatusQuerySchema
>;
