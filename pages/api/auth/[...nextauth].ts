import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
});
