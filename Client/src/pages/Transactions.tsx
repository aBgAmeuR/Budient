import ListItem from '../components/TransactionListItem';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import React from 'react';

type Transaction = {
  name: string;
  date: Date;
  amount: number;
  category: string;
  desc: string;
};

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

export default function Transactions() {
  const [transactions, setTransactions] = React.useState<Transaction[]>(data);
  console.log(data[0].date);
  
  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <GridComponent dataSource={transactions} allowPaging={true} pageSettings={{ pageSize: 6 }}>
          <ColumnsDirective>
            <ColumnDirective field="name" headerText="Name" width="200" />
            <ColumnDirective field="date" headerText="Date" width="115" format="dd/MM/yyyy" />
            <ColumnDirective field="amount" headerText="Amount" width="115" format="0.00€" />
            <ColumnDirective field="category" headerText="Category" width="100" />
            <ColumnDirective field="desc" headerText="Description" width="auto" />
          </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
      </div>
    </main>
  );
}
