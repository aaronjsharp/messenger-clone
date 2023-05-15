// This file will protect the 'users' route
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/'
  }
});

export const config = {
  matcher: [
    // protect all routes inside 'users'
    '/users/:path*',
    '/conversations/:path*'
  ]
};