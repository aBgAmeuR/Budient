import { ErrorRequestHandler } from 'express';
import BaseError from '../Helpers/BaseError';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    res.status(err.statusCode).json({
      message: err.message,
      error: true,
    });
  } else {
    res.status(500).json({
      message: 'Internal Server Error.',
    });
  }
}
