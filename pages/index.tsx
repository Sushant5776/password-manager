import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignInForm from '@/components/SignInForm'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/stateManager'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
import AboutUsCard from '@/components/AboutUsCard'

const Home: NextPage<{ session: Session | null }> = ({ session }) => {
  const show = useSelector<RootState>((state) => state.form.show)

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
        <title>Password Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white/95 sm:bg-white/[0.93] space-y-9 flex flex-col w-full min-h-screen">
        <Header />
        {/* Content */}
        <div className="flex flex-1 flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between sm:justify-around h-fit">
          {/* Heading */}
          <h2 className="sm:font-semibold font-medium sm:my-0 my-[3.625rem] text-center sm:text-left text-rakhadi leading-[6rem] sm:leading-[5rem] drop-shadow-lg text-6xl sm:text-6xl w-[17rem] sm:w-[17rem]">
            <span className="text-laal">Let's</span> Have You Digitally{' '}
            <span className="text-laal">Safe!</span>
          </h2>
          {/* Forms */}
          <div>
            {show ? (
              // signInForm
              <SignInForm />
            ) : (
              // SignUpForm
              <AboutUsCard />
            )}
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session },
  }
}

export default Home
