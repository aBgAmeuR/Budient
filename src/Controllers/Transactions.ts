import { Request, Response, NextFunction } from 'express';
import User from '../Models/User';
import { Transaction } from '../Models/Transaction';
import { Types } from 'mongoose';

export async function CreateTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = res.locals.userId;
    const { amount, type, category, description } = req.body;

    // Check if the id is present.
    if (!userId) {
      throw new Error('Missing id.');
    }

    // Parse the date.
    const date = new Date(req.body.date);

    // Check if all parameters are present.
    if (!amount || !date || !type) {
      throw new Error('Missing parameters.');
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
      throw new Error('User not found.');
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
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // get all transactions
    const transactions = await Transaction.find({ _id: { $in: user.transactions } });

    // Send the response.
    res.status(200).json(transactions);
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
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(new Types.ObjectId(userId));
    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }
    console.log(user.transactions);

    // Find the transaction.
    const transaction = await Transaction.findById(new Types.ObjectId(transactionId));

    // Check if the transaction exists.
    if (!transaction) {
      throw new Error('Transaction not found.');
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
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(new Types.ObjectId(userId));

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Find the transaction.
    const transaction = await Transaction.findById(new Types.ObjectId(transactionId));

    // Check if the transaction exists.
    if (!transaction) {
      throw new Error('Transaction not found.');
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
