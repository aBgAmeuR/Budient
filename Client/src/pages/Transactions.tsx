import DataTable, { TableColumn } from 'react-data-table-component';
import ListItem from '../components/TransactionListItem';
import React from 'react';

type Transaction = {
  name: string;
  date: Date;
  amount: number;
  category: string;
  desc: string;
};

const columns: TableColumn<Transaction>[]= [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Date',
    selector: row => row.date.toISOString().substring(0, 10),
    sortable: true,
  },
  {
    name: 'Amount',
    selector: row => row.amount,
    sortable: true,
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true,
  },
  {
    name: 'Description',
    selector: row => row.desc,
  },
];

const data = [
  {
    name: 'Apple',
    date: new Date('2020-11-04'),
    amount: 11.22,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Carfour',
    date: new Date('2021-11-04'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
];

const paginationComponentOptions = {
  selectAllRowsItem: false,
  noRowsPerPage: true,
};

export default function Transactions() {
  const [filterText, setFilterText] = React.useState('');
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <DataTable columns={columns} data={filteredItems} pagination paginationComponentOptions={paginationComponentOptions} />
      </div>
    </main>
  );
}
