import AddNewCredsPopup from '@/components/AddNewCredsPopup'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore'
import { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserData } from 'types/database/UserData'
import { db } from 'utils/database'
import { RootState } from 'utils/stateManager'

const Dashboard: NextPage<{ session: Session; data: UserData[] | [] }> = ({
  session,
  data,
}) => {
  const [creds, setCreds] = useState(data)
  const [newCredsPopupState, setNewCredsPopupState] = useState(false)
  const { hideOverflow } = useSelector((state: RootState) => state.editPopup)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'users', session.user.id, 'data'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        const data = snapshot.docs.map(
          (doc) =>
            ({
              docId: doc.id,
              ...doc.data(),
              timestamp: (doc.data().timestamp as Timestamp)
                ?.toDate()
                .toString(),
            } as UserData)
        )
        setCreds(data)
      }
    )

    return () => unsubscribe()
  }, [])

  return (
    <>
      {newCredsPopupState ? (
        <AddNewCredsPopup
          setNewCredsPopupState={setNewCredsPopupState}
          user_id={session.user.id}
        />
      ) : (
        ''
      )}
      <div
        style={{
          background: 'url(./images/leaves.svg)',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-y',
        }}
        className={`w-full min-h-screen ${
          newCredsPopupState || hideOverflow ? 'h-screen overflow-hidden' : ''
        }`}
      >
        <Head>
          <title>Dashboard - {session.user.name || session.user.email}</title>
        </Head>
        <main className="bg-white/95 dark:bg-slate-900/[0.9925] space-y-4 flex flex-col w-full min-h-screen">
          {/* Header */}
          <Header title="PassMan" />
          {/* Horizontal Rule */}
          <div className="flex py-2 items-center">
            <div className="flex-grow border dark:border-rakhadi/20 border-rakhadi/50"></div>
            <span className="flex-shrink tracking-wide text-rakhadi dark:text-slate-400 dark:font-bold drop-shadow-md font-semibold px-4">
              Dashboard -{' '}
              <span className="text-slate-500">
                {session.user.name || session.user.email}
              </span>
            </span>
            <div className="flex-grow border dark:border-rakhadi/20 border-rakhadi/50"></div>
          </div>
          {/* Content */}
          <section className="sm:mx-24 mx-5 flex-grow">
            {/* Descriptive Heading */}
            <div className="mb-4 dark:space-y-2 dark:sm:space-y-0 sm:space-x-6">
              <h2 className="text-rakhadi dark:text-center dark:w-full dark:sm:w-auto dark:text-slate-400 inline-block font-semibold text-base sm:text-2xl">
                Your Notes &amp; Passwords
              </h2>
              <button
                onClick={() => setNewCredsPopupState(true)}
                className="p-2 text-slate-500 dark:mx-auto dark:w-full dark:sm:w-auto text-sm sm:text-base bg-neutral-500/10 hover:outline hover:outline-2 hover:text-slate-600 hover:outline-rakhadi/30 hover:shadow-neutral-200 hover:drop-shadow-sm active:text-white active:outline-none active:bg-rakhadi dark:active:bg-slate-500 dark:bg-slate-600 dark:text-slate-300/80 dark:hover:text-slate-200 dark:font-semibold transition font-medium rounded-md backdrop-blur-3xl"
              >
                Add Credentials
              </button>
            </div>
            {creds.length ? (
              <section className="flex flex-wrap gap-4 sm:gap-8 w-max max-w-full items-center justify-start">
                {/* Password/Key Cards */}
                {creds.map((doc) => (
                  <Card {...doc} user_id={session.user.id} key={doc.docId} />
                ))}
              </section>
            ) : (
              <h1 className="sm:text-xl text-base text-center mt-8 font-medium text-kaala/80 animate-bounce">
                Oops! You have no credentials saved yet!
              </h1>
            )}
          </section>
          {/* Footer */}
          <Footer name="Sushant Garudkar" />
        </main>
      </div>
    </>
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

  return {
    props: { session, data },
  }
}
