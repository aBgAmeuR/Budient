import { useState } from 'react';
import { Transaction } from '../../pages/Transactions';
import TransactionListItem from './TransactionListItem';

export default function TransactionsList({ transactions }: { transactions: Transaction[] }) {
  return (
    <ul className="list">
      {transactions.map((transaction) => (
        <TransactionListItem {...transaction} key={transaction.id} />
      ))}
    </ul>
  );
}
