import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';
// import ThemeToggle from '@/components/ui/theme-toggle';

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <MainNav />
//       <ThemeToggle />
//     </>
//   );
// }

import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from '@/components/ui/transactions/columns';
import { DataTable } from '@/components/ui/transactions/data-table';
import { UserNav } from '@/components/ui/transactions/user-nav';
import { taskSchema } from '@/components/ui/data/schema';

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), 'src/components/ui/data/tasks.json'));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <Header />
      <MainNav />
      {/* <main className='w-[calc(100vw_-_250px)] h-[calc(100vh_-_70px)] relative left-[250px] top-[70px]'> */}
      <main>
        {/* <div className="md:hidden">
          <Image src="/examples/tasks-light.png" width={1280} height={998} alt="Playground" className="block dark:hidden" />
          <Image src="/examples/tasks-dark.png" width={1280} height={998} alt="Playground" className="hidden dark:block" />
        </div> */}
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          {/* <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">Here&apos;s a list of your tasks for this month!</p>
            </div>
            <div className="flex items-center space-x-2">
              <UserNav />
            </div>
          </div> */}
          <DataTable data={tasks} columns={columns} />
        </div>
      </main>
    </>
  );
}
