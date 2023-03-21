import { Table, TablePagination, TableSortLabel } from '@mui/material';
import { useState } from 'react';
import TransactionListItem from '../components/TransactionListItem';
import TransactionsFilters from '../components/TransactionsFilters';

type Transaction = {
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
  const [data, setData] = useState<Transaction[]>(Data);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({});

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  console.log(filter);
  

  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <TransactionsFilters setFilter={setFilter} filter={filter} />
        <Table>
          {/* <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead> */}
          <tbody className="list">
            {data.map((transaction) => (
              <TransactionListItem {...transaction} key={transaction.id} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                <TablePagination
                  rowsPerPageOptions={[]}
                  component="div"
                  count={Data.length}
                  rowsPerPage={6}
                  page={page}
                  onPageChange={() => {
                    handleChangePage;
                  }}
                />
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </main>
  );
}
