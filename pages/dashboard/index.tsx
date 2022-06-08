import Header from '@/components/Header'
import { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession, signOut } from 'next-auth/react'

const Dashboard: NextPage<{ session: Session }> = ({ session }) => {
  return (
    <main>
      <Header />
      <h1>Welcome {session.user?.name || session.user.email}!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </main>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session },
  }
}
