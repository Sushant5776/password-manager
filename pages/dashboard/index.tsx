import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore'
import { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { UserData } from 'types/database/UserData'
import { db } from 'utils/database'

const Dashboard: NextPage<{ session: Session; data: UserData[] | [] }> = ({
  session,
  data,
}) => {
  return (
    <div
      style={{
        background: 'url(./images/leaves.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat-y',
      }}
      className="w-full min-h-screen"
    >
      <Head>
        <title>Dashboard - {session.user.name || session.user.email}</title>
      </Head>
      <main className="bg-white/95 flex flex-col w-full min-h-screen">
        {/* Header */}
        <Header title="PassMan" />
        {/* Horizontal Rule */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border border-rakhadi/50"></div>
          <span className="flex-shrink tracking-wide text-rakhadi drop-shadow-md font-semibold px-4">
            Dashboard -{' '}
            <span className="text-slate-600">
              {session.user.name || session.user.email}
            </span>
          </span>
          <div className="flex-grow border border-rakhadi/50"></div>
        </div>
        {/* Content */}
        <section className="mx-24 flex-grow">
          {/* Descriptive Heading */}
          <h2 className="text-rakhadi mb-4 font-semibold sm:text-2xl">
            Your Notes &amp; Passwords
          </h2>
          <section className="flex flex-wrap gap-8 w-max max-w-full items-center justify-start">
            {/* Password/Key Cards */}
            {data.map((authPair) => (
              <Card
                key={authPair.docId}
                title={authPair.title}
                id={authPair.identity}
                pass_key={authPair.value}
              />
            ))}
          </section>
        </section>
        {/* Footer */}
        <Footer name="Sushant Garudkar" />
      </main>
    </div>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  let data: UserData[] | []
  if (session) {
    data = (
      await getDocs(
        query(
          collection(db, 'users', session.user.id, 'data'),
          orderBy('timestamp', 'desc')
        )
      )
    ).docs.map(
      (doc) =>
        ({
          docId: doc.id,
          ...doc.data(),
          timestamp: (doc.data().timestamp as Timestamp)?.toDate().toString(),
        } as UserData)
    )
  } else {
    data = []
  }
  console.log(data)
  return {
    props: { session, data },
  }
}
