import { Request, Response, NextFunction } from 'express';
import Hash from '../Helpers/Hash';
import User from '../Models/User';
import BaseError from '../Helpers/BaseError';
import mongoose from 'mongoose';

export async function CreateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, surname, dateOfBirth, email, preset } = req.body;

    // Check if all parameters are present.
    if (!name || !surname || !dateOfBirth || !email || !req.body.password) {
      throw new BaseError('Missing parameters.', 400);
    }

    // Check if the user already exists.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BaseError('User already exists.', 409);
    }

    const password = await Hash(req.body.password);
    
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
    res.status(201).json({
      error: false,
      message: 'User created successfully.',
      data: {
        Id: user._id,
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
      throw new BaseError('Missing id.', 400);
    }

    // Check if the id is valid.
    if (!mongoose.isValidObjectId(id)) {
      throw new BaseError('Invalid id.', 400);
    }

    // Find the user.
    const user = await User.findById(id);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Send the response.
    res.status(200).json({
      message: 'User found successfully.',
      error: false,
      data: {
        user: {
          name: user.name,
          surname: user.surname,
          dateOfBirth: user.dateOfBirth,
          email: user.email,
          preset: user.preset,
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
      throw new BaseError('Missing id.', 400);
    }

    // Check if the id is valid.
    if (!mongoose.isValidObjectId(id)) {
      throw new BaseError('Invalid id.', 400);
    }

    // Find the user and update it.
    const user = await User.findByIdAndUpdate(id, update);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Send the response.
    res.status(200).json({
      message: 'User updated successfully.',
      error: false,
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
      throw new BaseError('Missing id.', 400);
    }

    // Check if the id is valid.
    if (!mongoose.isValidObjectId(id)) {
      throw new BaseError('Invalid id.', 400);
    }
    
    // Find the user and delete it.
    const user = await User.findByIdAndDelete(id);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Send the response.
    res.status(200).json({
      message: 'User deleted successfully.',
      error: false,
    });
  } catch (err) {
    next(err);
  }
}