import { ZodSchema } from 'zod';
import { validate } from './validate.js';

export const validateParams = (schema: ZodSchema) => validate(schema, 'params');