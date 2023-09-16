import Header from '@/components/page-header';
import MainNav from '@/components/main-nav';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

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
