import { idParamSchema, taskIdSchema, noteContentBaseSchema } from '../utils/validationHelpers';

export const findNotesByTaskIdSchema = taskIdSchema.strict();

export const createNoteSchema = noteContentBaseSchema.merge(taskIdSchema).strict();

export const updateNoteSchema = noteContentBaseSchema.partial().strict();

export const findNoteByIdSchema = idParamSchema.strict();

export const deleteNoteSchema = idParamSchema.strict();