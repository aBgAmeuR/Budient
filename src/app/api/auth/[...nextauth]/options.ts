import type { Account, NextAuthOptions, Profile, Session, User } from 'next-auth';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const options: NextAuthOptions = {
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const name = credentials.username;
        const password = credentials.password;

        const user = await prisma.user.findUnique({
          where: {
            name,
          },
        });

        if (!user) {
          return null;
        }
        
        const userPassword = user.password;

        const isValidPassword = bcrypt.compareSync(password, userPassword);
        
        if (!isValidPassword) {          
          return null;
        }

        return user;
      },
    },
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    newUser: '/auth/new-user',
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error('No token to encode');
      }

      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) {
        throw new Error('No token to decode');
      }
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === 'string') {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async session(params: { session: Session; token: JWT; user: User }) {    
      if (params.session.user) {
        params.session.user.name = params.token.name;
      }

      return params.session;
    },
    async jwt(params: { token: JWT; user?: User | undefined; account?: Account | null | undefined; profile?: Profile | undefined; isNewUser?: boolean | undefined }) {
      if (params.user) {
        params.token.name = params.user.name;
      }

      return params.token;
    },
  },
};
