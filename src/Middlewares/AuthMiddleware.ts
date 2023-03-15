import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../Config/Config';
import BaseError from '../Helpers/BaseError';

// auth with jwt
export async function Auth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.get('token');
    
    // Check if the token is present.
    if (!token) {
      throw new BaseError('Missing token.', 400);
    }

    // Verify the token.
    let user;
    try {
      user = jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
      throw new BaseError('Invalid token.', 401);
    }

    // Check if the user exists and is a string.
    if (!user || typeof user === 'string') {
      throw new BaseError('Invalid token.', 401);
    }

    // Send the response.
    res.locals.userId = user._id;

    next();
  } catch (err) {
    next(err);
  }
}
