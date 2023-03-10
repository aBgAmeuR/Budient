import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../Models/User';
import { config } from '../Config/Config';

// auth with jwt
export async function Auth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    // Check if the token is present.
    if (!token) {
      throw new Error('Missing token.');
    }

    // Verify the token.
    let user;
    try {
      user = jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
      throw new Error('Invalid token.');
    }

    // Check if the user exists and is a string.
    if (!user || typeof user === 'string') {
      throw new Error('Invalid token.');
    }

    // Send the response.
    res.locals.userId = user._id;

    next();
  } catch (err) {
    next(err);
  }
}
