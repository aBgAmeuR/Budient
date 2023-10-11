import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import prisma from '../lib/prisma';
import { OverviewDashboard } from '@/components/ui/overview-dashboard';

interface DataChart {
  [key: string]: number;
}

export default async function Home() {
  const session = await getServerSession(options);
  if (!session) redirect('/auth/signin');

  const transactions = await prisma.transaction.findMany({
    where: {
      author: {
        id: session.user.id,
      },
      date: {
        gte: new Date(new Date().getFullYear(), 0, 1),
      },
    },
    orderBy: {
      date: 'desc',
    },
    select: {
      id: true,
      name: true,
      date: true,
      amount: true,
      category: true,
      description: true,
    },
  });

  const currentDate = new Date();
  const initialData = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - index, 1);
    const month = date.toLocaleString('default', { month: 'short' }).replace('.', '');
    return { name: month, total: 0 };
  });

  const dataChart = transactions.reduce((acc, cur) => {
    const date = new Date(cur.date);
    const month = date.toLocaleString('default', { month: 'short' }).replace('.', '');;
    const index = acc.findIndex(item => item.name === month);
    if (index !== -1) {
      acc[index].total = parseFloat((acc[index].total + cur.amount).toFixed(2));
    }
    return acc;
  }, initialData).reverse();


  return (
    <>
      <Header />
      <MainNav />
      <OverviewDashboard dataChart={dataChart} />
    </>
  );
}
