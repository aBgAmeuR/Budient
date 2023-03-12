import { Request, Response, NextFunction } from 'express';
import User from '../Models/User';
import jwt from 'jsonwebtoken';
import Hash from '../Helpers/Hash';
import { config } from '../Config/Config';

export async function Authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;

    // Check if the email and password are present.
    if (!email || !password) {
      throw new Error('Missing email or password.');
    }

    // Find the user.
    const user = await User.findOne({ email });

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Check if the password is correct.
    const passwordHash = Hash(password);
    console.log(passwordHash, user.password);

    if (passwordHash !== user.password) {
      throw new Error('Invalid password.');
    }

    // Generate a JWT.
    const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send the response.
    res.status(200).json({
      message: 'User authenticated successfully.',
      token,
    });
  } catch (err) {
    next(err);
  }
}
