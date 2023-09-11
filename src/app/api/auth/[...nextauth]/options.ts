import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'your username' },
        password: { label: 'Password', type: 'password', placeholder: 'your password' },
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'Dave', password: 'nextauth' };
        if (credentials?.username === user.name && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    },
  ],
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
  },
};
