import { ZodSchema } from 'zod';
import { validate } from './validate.js';

export const validateQuery = (schema: ZodSchema) => validate(schema, 'query');