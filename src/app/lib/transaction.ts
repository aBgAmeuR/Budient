import { Transaction } from "@prisma/client";

export const addTransaction = (transaction: Transaction) => {
  // 'use server'

  const prisma = require('@prisma/client').PrismaClient
  const db = new prisma()

  return db.transaction.create({
    data: transaction,
  })
};