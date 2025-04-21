import { ZodSchema } from 'zod';
import { validate } from './validate';

export const validateParams = (schema: ZodSchema) => validate(schema, 'params');