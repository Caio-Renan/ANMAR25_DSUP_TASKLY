import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError.js';

const globalErrorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.status).json({ errors: err.errors });
    return;
  }

  res.status(500).json({
    errors: ['An internal server error occurred'],
  });
};

export default globalErrorHandler;
