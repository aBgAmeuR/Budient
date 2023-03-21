import ReactTableUI from 'react-table-ui';
import { useCallback, useMemo, useRef, useState } from 'react';
import type { Column, UsePaginationState, TableInstance } from 'react-table';

type Transaction = {
  name: string;
  date: string;
  amount: number;
  category: string;
  desc: string;
};

const Data: Transaction[] = [
  {
    name: 'Apple',
    date: new Date('2020-11-04').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 11.22,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Amazon',
    date: new Date('2021-04-06').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 100.03,
    category: 'Maison',
    desc: 'Bought some food',
  },
  {
    name: 'Carfour',
    date: new Date('2021-11-04').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    name: 'Carfour',
    date: new Date('2021-11-04').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    name: 'Carfour',
    date: new Date('2021-11-04').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
  {
    name: 'Carfour',
    date: new Date('2021-11-04').toISOString().split('T')[0].replace(/-/g, '/'),
    amount: 9.0,
    category: 'Food',
    desc: 'Desciption',
  },
];

const useTransactionsAPI = () => {
  const [Transactions, setTransactions] = useState<Transaction[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  const fetchData = useCallback(async () => {
    setTransactions(Data || []);
    setPageCount(Math.ceil(Data.length / 6) || 0);
    setTotalTransactions(Data.length || 0);
  }, []);

  const columns: Column<Transaction>[] = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Description',
        accessor: 'desc',
      },
    ],
    [],
  );

  return {
    fetchData,
    pageCount,
    columns,
    data: Transactions,
    recordCount: totalTransactions,
  };
};

export default function Transactions() {
  const { fetchData, data, pageCount, recordCount } = useTransactionsAPI();

  const tableInstanceRef = useRef<TableInstance<Transaction>>(null);

  // const singleRowActions: SingleRowAction<Transaction>[] = [{
  //     id: 'log',
  //     tooltip: 'Console log data',
  //     onClick: console.log,
  //     children: <div>Console log data</div>,
  // }];

  return (
    <main id="Transactions">
      <div className="top">
        <h2>Transactions</h2>
        <button>+ Add Transactions</button>
      </div>
      <div className="content">
        <ReactTableUI
          data={data}
          tableInstanceRef={tableInstanceRef}
          // actionOptions={{ singleRowActions }}
          paginationOptions={{
            manualPagination: true,
            pageCount,
            fetchData,
            recordCount,
            pageSizes: [6],
          }}
        />
      </div>
    </main>
  );
}
