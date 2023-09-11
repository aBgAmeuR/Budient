export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard', '/analytics', '/categories', '/transactions', '/subcription', '/profile'],
};