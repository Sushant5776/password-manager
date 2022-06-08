import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { doc, getDoc } from 'firebase/firestore'
import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import { User } from 'types/next-auth'
import { authClient, db } from 'utils/database'

export default NextAuth({
  providers: [
    EmailProvider({
      id: 'email',
      name: 'Email Authentication',
      type: 'email',
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASS,
        },
      },
      from: process.env.EMAIL_SERVER_FROM,
    }),
  ],
  pages: { signIn: '/', signOut: '/dashboard' },
  adapter: FirebaseAdapter(authClient),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, user }
      } else {
        const user = await getDoc(doc(db, 'users', token.sub as string | ''))
        if (user) {
          return { ...token, user: user.data() }
        } else {
          return token
        }
      }
    },
    async session({ session, token }) {
      session.user = token.user as User
      return session
    },
  },
})
