import { useState } from 'react';
import { Transaction } from '../../pages/Transactions';
import TransactionListItem from './TransactionListItem';

export default function TransactionsList({ transactions }: { transactions: Transaction[] }) {
  const [data, setData] = useState<Transaction[]>(transactions);
  const [page, setPage] = useState(0);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <ul className='list'>
      {transactions.map((transaction) => (
        <TransactionListItem key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
} 
