'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  page: string;
};

export default function MainNavButton(props: Props) {
  const pathname = usePathname().split('/')[1];

  return (
    <Link href={`/${props.page}`} className={props.page === pathname ? 'focus' : ''}>
      {props.children}
    </Link>
  );
}
