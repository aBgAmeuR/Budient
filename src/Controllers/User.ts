import { Request, Response, NextFunction } from 'express';
import Bcrypt from 'bcrypt';
import User from '../Models/User';

export async function CreateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, surname, dateOfBirth, email, preset } = req.body;

    // Check if all parameters are present.
    if (!name || !surname || !dateOfBirth || !email || !req.body.password) {
      throw new Error('Missing parameters.');
    }

    const password = await Bcrypt.hash(req.body.password, 10);

    // Create the user.
    const user = new User({
      name,
      surname,
      dateOfBirth,
      email,
      password,
      ...(preset && { preset }),
    });

    // Save the user.
    await user.save();

    // Send the response.
    res.status(200).json({
      message: 'User created successfully.',
      user,
    });
  } catch (err) {
    next(err);
  }
}

export async function GetUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;

    // Check if the id is present.
    if (!id) {
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(id);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Send the response.
    res.status(200).json({
      message: 'User found successfully.',
      user,
    });
  } catch (err) {
    next(err);
  }
}
