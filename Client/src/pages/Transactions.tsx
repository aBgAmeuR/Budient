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

export type Filter = {
  search: string;
  date: string;
  amount: number;
  amountOrder: string;
  category: string;
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
    date: new Date('2021-04-07'),
    amount: 100.03,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f116',
    name: 'Nike',
    date: new Date('2021-05-02'),
    amount: 100.03,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f111',
    name: 'Amazon',
    date: new Date('2022-07-06'),
    amount: 100.03,
    category: 'Bills',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11q',
    name: 'Super U',
    date: new Date('2021-06-08'),
    amount: 100.03,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11m',
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11l',
    name: 'Super U',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11j',
    name: 'Carfour',
    date: new Date('2021-11-01'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11z',
    name: 'Train',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Shopping',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11g',
    name: 'Carfour',
    date: new Date('2021-11-21'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    id: '6410f2bc57514ac42a80f11f',
    name: 'Adidas',
    date: new Date('2021-11-03'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
];

export default function Transactions() {
  const [filter, setFilter] = useState({ search: '', date: '', amount: 0, amountOrder: 'asc', category: '' });
  const [data, setData] = useState(Data);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowperpage, setRowperpage] = useState(6);

  const paginate = (items: Transaction[], page = 1, perPage = rowperpage) =>
    items.slice(perPage * (page - 1), perPage * page);
  const paginatedData = paginate(data, page);

  useEffect(() => {
    let filteredData = Data

    if (filter.search !== '') {
      filteredData = filteredData.filter((transaction) => transaction.name.toLowerCase().includes(filter.search.toLowerCase()));
    }

    if (filter.date !== '') {
      filteredData = filteredData.filter((transaction) => {
        transaction.date.toISOString().slice(0, 7) === filter.date.toString();
        console.log(transaction.date.toISOString().slice(0, 7));
        console.log(filter.date);
      });

    }

    if (filter.amount !== 0 && filter.amountOrder === 'asc') {
      filteredData = filteredData.filter((transaction) => transaction.amount >= filter.amount);
    } else if (filter.amount !== 0 && filter.amountOrder === 'desc') {
      filteredData = filteredData.filter((transaction) => transaction.amount <= filter.amount);
    }

    if (filter.category !== '' && filter.category !== 'all') {
      filteredData = filteredData.filter((transaction) => transaction.category === filter.category);
    }

    setData(filteredData);
  }, [filter]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / rowperpage));
    setRowperpage(Math.round((window.innerHeight * 0.52) / (70 + 16)));
    setPage(1);
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
        <TransactionsPagination page={page} setPage={setPage} totalPages={totalPages} rowperpage={rowperpage} />
      </div>
    </main>
  );
}




// useEffect(() => {
//   const filteredData = Data.filter((transaction) => {
//     if (filter.search === '' && filter.date === '' && filter.amount === 0 && (filter.category === '' || filter.category === 'all')) return true;
//     if (filter.search !== '' && transaction.name.toLowerCase().includes(filter.search.toLowerCase())) return true;
//     if (filter.date !== '' && transaction.date.toDateString() === new Date(filter.date).toDateString()) return true;
//     if (filter.amount !== 0 && transaction.amount === filter.amount) return true;
//     if (filter.category !== '' && transaction.category.toLowerCase() === filter.category.toLowerCase()) return true;
//     return false;
//   });
//   setData(filteredData);
// }, [filter]);