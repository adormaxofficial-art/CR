import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
 codex/create-new-branch-and-scaffold-minimal-crm-7x0ab8
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '../../../../lib/db';

const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID || process.env.GMAIL_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || process.env.GMAIL_CLIENT_SECRET || '';


import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '../../../../lib/db';

 main
const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
 codex/create-new-branch-and-scaffold-minimal-crm-7x0ab8
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,

      clientId: process.env.GMAIL_CLIENT_ID ?? '',
      clientSecret: process.env.GMAIL_CLIENT_SECRET ?? '',
 main
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
