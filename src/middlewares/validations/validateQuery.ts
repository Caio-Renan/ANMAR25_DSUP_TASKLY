import { Request, Response, NextFunction } from 'express';

const validateQuery = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const queryCopy = { ...req.query };

    const result = schema.safeParse(queryCopy);

    if (!result.success) {
      res.status(400).json({ errors: result.error.errors });
      return;
    }

    next();
  };
};

export default validateQuery;
