import { Request, Response, NextFunction } from 'express';
import User from '../Models/User';
import TransactionSchema from '../Models/Transaction';

export async function CreateTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { userId } = req.params;
    const { date, amount, type, category, description } = req.body;

    // Check if the id is present.
    if (!userId) {
      throw new Error('Missing id.');
    }

    // Check if all parameters are present.
    if (!amount || !description || !date || !type) {
      throw new Error('Missing parameters.');
    }

    // Create the transaction.
    const newTransaction = new TransactionSchema({
      date,
      amount,
      type,
      category,
      description,
    });

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      console.error('User not found');
      return;
    }

    // Add the transaction to the user's transactions array.
    user.transactions.push(newTransaction);

    // Save the user.
    await user.save();

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
    const { userId } = req.params;

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

    // Send the response.
    res.status(200).json({
      message: 'Transactions found successfully.',
      transactions: user.transactions,
    });
  } catch (err) {
    next(err);
  }
}

export async function UpdateTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { userId, transactionId } = req.params;
    const update = req.body;

    // Check if the id is present.
    if (!userId || !transactionId) {
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Find the transaction.
    const transaction = user.transactions.find((transaction) => transaction._id == transactionId);

    // Check if the transaction exists.
    if (!transaction) {
      throw new Error('Transaction not found.');
    }

    // Update the transaction.
    transaction.update(update);

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
    const { userId, transactionId } = req.params;

    // Check if the id is present.
    if (!userId || !transactionId) {
      throw new Error('Missing id.');
    }

    // Find the user.
    const user = await User.findById(userId);

    // Check if the user exists.
    if (!user) {
      throw new Error('User not found.');
    }

    // Find the transaction.
    const transaction = user.transactions.find((transaction) => transaction._id == transactionId);

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