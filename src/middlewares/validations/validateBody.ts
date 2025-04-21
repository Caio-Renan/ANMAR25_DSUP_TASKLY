import { ZodSchema } from 'zod';
import { validate } from './validate.js';

export const validateBody = (schema: ZodSchema) => validate(schema, 'body');