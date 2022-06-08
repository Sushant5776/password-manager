import { Timestamp } from 'firebase/firestore'
import NextAuth, { DefaultSession } from 'next-auth'
// import { DefaultJWT, JWT } from 'next-auth/jwt'

interface User {
  id: string
  email: string
  name?: string
  image?: string
  emailVerified: Timestamp
}

declare module 'next-auth' {
  interface Session extends DefaultSession['user'] {
    user: User
  }
}

// declare module 'next-auth/jwt' {
//   interface JWT extends DefaultJWT {
//     user: {
//       name: string
//       id: string
//       image: string
//       email: string
//       emailVerified: Timestamp
//     }
//   }
// }
