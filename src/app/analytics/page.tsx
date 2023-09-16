import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

export default async function Home() {
  const session = await getServerSession(options);
  if (!session) redirect('/auth/signin');

  return (
    <>
      <Header />
      <MainNav />
    </>
  );
}
