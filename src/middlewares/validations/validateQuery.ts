import { ZodSchema } from 'zod';
import { validate } from './validate';

export const validateQuery = (schema: ZodSchema) => validate(schema, 'query');