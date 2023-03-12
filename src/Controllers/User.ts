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
    // const connectionHistory = {};
    // const transactions = {};

    const password = await Bcrypt.hash(req.body.password, 10);

    // Create the user.
    const user = new User({
      name,
      surname,
      dateOfBirth,
      email,
      password,
      ...(preset && { preset }),
      // ...(connectionHistory && { connectionHistory }),
      // ...(transactions && { transactions }),
    });

    // Save the user.
    await user.save();

    // Send the response.
    res.status(200).json({
      message: 'User created successfully.',
      data: {
        userId: user._id,
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function GetUser(req: Request, res: Response, next: NextFunction): Promise<void> {
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
      data: {
        user: {
          name: user.name,
          surname: user.surname,
          dateOfBirth: user.dateOfBirth,
          email: user.email,
          preset: user.preset,
          connectionHistory: user.connectionHistory,
          transactions: user.transactions,
          __v: user.__v,
        },
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function UpdateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const update = req.body;

    // Check if the id is present.
    if (!id) {
      throw new Error('Missing id.');
    }

    // Find the user and update it.
    const user = await User.findByIdAndUpdate(id, update);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Send the response.
    res.status(200).json({
      message: 'User updated successfully.',
    });
  } catch (err) {
    next(err);
  }
}

export async function DeleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;

    // Check if the id is present.
    if (!id) {
      throw new Error('Missing id.');
    }

    // Find the user and delete it.
    const user = await User.findByIdAndDelete(id);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Send the response.
    res.status(200).json({
      message: 'User deleted successfully.',
    });
  } catch (err) {
    next(err);
  }
}
