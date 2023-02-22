import { ErrorRequestHandler } from 'express';

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Do some error handling, logging, etc. Here


  // Set the response status code based on the error
  res.status(500);

  // Send the error message as response
  res.json({
    error: err.message,
  });
};