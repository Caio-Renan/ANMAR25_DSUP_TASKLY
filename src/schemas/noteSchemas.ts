import {
  idParamSchema,
  taskIdSchema,
  noteContentBaseSchema,
} from '../utils/validationHelpers.js';

export const findNotesByTaskIdSchema = taskIdSchema.strict();

export const createNoteSchema = noteContentBaseSchema.strict();

export const createNoteTaskIdSchema = taskIdSchema.strict();

export const updateNoteSchema = noteContentBaseSchema.partial().strict();

export const findNoteByIdSchema = idParamSchema.strict();

export const deleteNoteSchema = idParamSchema.strict();
