'use client';

import React, { useRef } from 'react';
import { signOut } from 'next-auth/react';

const Page = () => {
  signOut({ redirect: true, callbackUrl: "/auth/signin" });

  return (
    <h2></h2>
  )
}

export default Page;