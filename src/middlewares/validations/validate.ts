import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../../utils/CustomError';

type RequestProperty = 'body' | 'params' | 'query';

export const validate =
  (schema: ZodSchema, property: RequestProperty) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req[property]);

    if (!validation.success) {
      const errors = validation.error.errors.map((err) => err.message);
      return next(new CustomError(400, errors));
    }
    req[property] = validation.data;
    return next();
};