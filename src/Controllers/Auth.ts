import { Request, Response, NextFunction } from 'express';
import User from '../Models/User';
import jwt from 'jsonwebtoken';
import Hash from '../Helpers/Hash';
import { config } from '../Config/Config';
import BaseError from '../Helpers/BaseError';

export async function Auth(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;

    // Check if the email and password are present.
    if (!email || !password) {
      throw new BaseError('Missing parameters.', 400);
    }

    // Find the user.
    const user = await User.findOne({ email });

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Check if the password is correct.
    
    const passwordHash = Hash(password);
    console.log(passwordHash, user.password);

    if (passwordHash !== user.password) {
      throw new BaseError('Invalid password.', 401);
    }

    // Generate a JWT.
    const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send the response.
    res.status(200).json({
      message: 'User authenticated successfully.',
      error: false,
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
}
