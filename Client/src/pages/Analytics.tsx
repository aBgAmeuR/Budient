import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Transaction } from './Transactions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type DataPerMonth = {
  month: string;
  amount: number;
};

const dataFetch: Transaction[] = [
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
    amount: 56.99,
    category: 'Shopping',
    desc: 'Bought some food',
  },
  {
    id: '6410f2bc57514ac42a80f11j',
    name: 'Carfour',
    date: new Date('2021-10-01'),
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

const DataPerMonth = (data: Transaction[]) => {
  const dataPerMonth: DataPerMonth[] = [];

  data.forEach((transaction) => {
    const month = transaction.date.getMonth();
    const year = transaction.date.getFullYear();
    const date = new Date(year, month);

    const dataPerMonthIndex = dataPerMonth.findIndex(
      (data) => data.month === date.toDateString()
    );

    if (dataPerMonthIndex === -1) {
      dataPerMonth.push({
        month: date.toDateString(),
        amount: transaction.amount,
      });
    } else {
      dataPerMonth[dataPerMonthIndex].amount += transaction.amount;
    }
  });
// sort dataPerMonth by date
  dataPerMonth.sort((a, b) => {
    const dateA = new Date(a.month);
    const dateB = new Date(b.month);
    
    return dateA.getTime() - dateB.getTime();
  });

  return dataPerMonth;

};

const dataPerMonth = DataPerMonth(dataFetch);

export default function Analytics() {
  return (
    <main id="Analytics">
      <div className="top">
        <h2>Analytics</h2>
      </div>
      <div className="content">
        <div className="chart">
          <Line
            data={{
              labels: dataPerMonth.map((data) => data.month.split(' ')[1] + ' ' + data.month.split(' ')[3]),
              datasets: [
                {
                  label: 'Amount',
                  data: dataPerMonth.map((data) => data.amount),
                  fill: false,
                  backgroundColor: '#ff9f1c',
                  borderColor: '#ff9f1c',
                  borderWidth: 4.5,
                  tension: 0.3,
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                  labels: {
                    color: '#fff',
                    font: {
                      family: 'Poppins',
                      size: 16,
                    },
                  },
                },
                tooltip: {
                  displayColors: false,
                  backgroundColor: '#fff',
                  titleColor: '#000',
                  bodyColor: '#000',
                  borderColor: '#000',
                  borderWidth: 1,
                  callbacks: {
                    label: (context) => {
                      return context.formattedValue + '€';
                    },
                  },
                },
              },
              animation: {
                duration: 300,
              },
            }}
          />
        </div>
      </div>
    </main>
  )
}
