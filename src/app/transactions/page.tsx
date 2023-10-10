import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';

import { columns } from '@/components/ui/transactions/columns';
import { DataTable } from '@/components/ui/transactions/data-table';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import prisma from '@/app/lib/prisma';

export default async function TaskPage() {
  const session = await getServerSession(options);
  if (!session) redirect('/auth/signin');

  const transactions = await prisma.transaction.findMany({
    where: {
      author: {
        id: session.user.id,
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
  
  return (
    <>
      <Header />
      <MainNav />
      <main>
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <DataTable data={transactions} columns={columns} />
        </div>
      </main>
    </>
  );
}
