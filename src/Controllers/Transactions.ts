import { Request, Response, NextFunction } from 'express';
import User from '../Models/User';
import { Transaction } from '../Models/Transaction';
import { Types } from 'mongoose';
import BaseError from '../Helpers/BaseError';
import { basename } from 'path';

export async function CreateTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    const { amount, type, category, description } = req.body;

    // Check if the id is present.
    if (!userId) {
      throw new BaseError('Missing id.', 400);
    }

    // Parse the date.
    const date = new Date(req.body.date);

    // Check if all parameters are present.
    if (!amount || !date || !type) {
      throw new BaseError('Missing parameters.', 400);
    }

    // Create the transaction.
    const newTransaction = new Transaction({
      date,
      amount,
      type,
      category,
      ...(description && { description }),
    });

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Add the transaction to the user's transactions array.
    user.transactions.push(newTransaction._id);

    // Save the user.
    await user.save();

    // Save the transaction.
    await newTransaction.save();

    // Send the response.
    res.status(200).json({
      message: 'Transaction created successfully.',
      transaction: newTransaction,
    });
  } catch (err) {
    next(err);
  }
}

export async function GetTransactions(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    
    // Check if the id is present.
    if (!userId) {
      throw new BaseError('Missing id.', 400);
    }

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // get all transactions
    const transactions = await Transaction.find({ _id: { $in: user.transactions } });

    // Send the response.
    res.status(200).json(transactions);
  } catch (err) {
    next(err);
  }
}
export async function GetTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    const { id: transactionId } = req.params;

    // Check if the id is present.
    if (!userId || !transactionId) {
      throw new BaseError('Missing id.', 400);
    }

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Find the transaction.
    const transaction = await Transaction.findById(transactionId);

    // Check if the transaction exists.
    if (!transaction) {
      throw new BaseError('Transaction not found.', 404);
    }

    // Send the response.
    res.status(200).json(transaction);
  } catch (err) {
    next(err);
  }
}

export async function UpdateTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    const { transactionId } = req.params;
    const update = req.body;

    // Check if the id is present.
    if (!userId || !transactionId) {
      throw new BaseError('Missing id.', 400);
    }

    // Find the user.
    const user = await User.findById(new Types.ObjectId(userId));
    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }
    console.log(user.transactions);

    // Find the transaction.
    const transaction = await Transaction.findById(new Types.ObjectId(transactionId));

    // Check if the transaction exists.
    if (!transaction) {
      throw new BaseError('Transaction not found.', 404);
    }

    // Update the transaction.
    transaction.set(update);

    // Save the user.
    await user.save();

    // Send the response.
    res.status(200).json({
      message: 'Transaction updated successfully.',
      transaction,
    });
  } catch (err) {
    next(err);
  }
}

export async function DeleteTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    const { transactionId } = req.params;

    // Check if the id is present.
    if (!userId || !transactionId) {
      throw new BaseError('Missing id.', 400);
    }

    // Find the user.
    const user = await User.findById(new Types.ObjectId(userId));

    // Check if the user exists.
    if (!user) {
      throw new BaseError('User not found.', 404);
    }

    // Find the transaction.
    const transaction = await Transaction.findById(new Types.ObjectId(transactionId));

    // Check if the transaction exists.
    if (!transaction) {
      throw new BaseError('Transaction not found.', 404);
    }

    // Delete the transaction.
    transaction.remove();

    // Save the user.
    await user.save();

    // Send the response.
    res.status(200).json({
      message: 'Transaction deleted successfully.',
      transaction,
    });
  } catch (err) {
    next(err);
  }
}
