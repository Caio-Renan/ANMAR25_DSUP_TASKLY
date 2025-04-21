import { ZodSchema } from 'zod';
import { validate } from './validate';

export const validateBody = (schema: ZodSchema) => validate(schema, 'body');