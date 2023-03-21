import { useEffect, useState } from 'react';
import TransactionListItem from '../components/Transactions/TransactionListItem';
import TransactionsFilters from '../components/Transactions/TransactionsFilters';
import TransactionsList from '../components/Transactions/TransactionsList';
import TransactionsPagination from '../components/Transactions/TransactionsPagination';

export type Transaction = {
  id: string;
  name: string;
  date: Date;
  amount: number;
  category: string;
  desc: string;
};

const Data: Transaction[] = [
  {
    id: '6410f2bc57514ac42a80f11e',
    name: 'Apple',
    date: new Date('2020-11-04'),
    amount: 11.22,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11e3',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f116',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f111',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11q',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11m',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11l',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11j',
    name: 'Carfour',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11z',
    name: 'Carfour',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11g',
    name: 'Carfour',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11f',
    name: 'Carfour',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
];

export default function Transactions() {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState(Data);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const paginate = (items: Transaction[], page = 1, perPage = 6) => items.slice(perPage * (page - 1), perPage * page);
  const paginatedData = paginate(data, page);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / 6));
  }, [data]);

  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <TransactionsFilters setFilter={setFilter} filter={filter} />
        <TransactionsList transactions={paginatedData} />
        <TransactionsPagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </main>
  );
}
