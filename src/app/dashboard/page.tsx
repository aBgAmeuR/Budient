import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import prisma from '../lib/prisma';

interface DataChart {
  [key: string]: number;
}

export default async function Home() {
  const session = await getServerSession(options);
  if (!session) redirect('/auth/signin');
  // get all transactions for the user
  // const transactions = await prisma.transaction.findMany({
  //   where: {
  //     author: {
  //       id: session.user.id,
  //     },
  //     date: {
  //       gte: new Date(new Date().getFullYear(), 0, 1),
  //     },
  //   },
  //   orderBy: {
  //     date: 'desc',
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     date: true,
  //     amount: true,
  //     category: true,
  //     description: true,
  //   },
  // });

  // // Initialize an object with all months of the current year set to 0
  // const initialData = Array.from({ length: 12 }, (_, index) => {
  //   const date = new Date(new Date().getFullYear(), index, 1);
  //   const month = date.toLocaleString('default', { month: 'short' });
  //   return [month, 0];
  // }).reduce((acc, [month, amount]) => {
  //   acc[month] = amount;
  //   return acc;
  // }, {});


  // // group by transaction date per month and sum the amount
  // const dataChart = transactions.reduce<DataChart>((acc, cur) => {  // Specify the type of the accumulator
  //   const date = new Date(cur.date);
  //   const month = date.toLocaleString('default', { month: 'short' });
  //   acc[month] = (acc[month] || 0) + cur.amount;
  //   return acc;
  // }, initialData);

  return (
    <>
      <Header />
      <MainNav />
      {/* <pre>{JSON.stringify(dataChart, null, 2) ?? "No data"}</pre> */}
    </>
  );
}
