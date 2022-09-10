import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignInForm from '@/components/SignInForm'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from 'utils/stateManager'
import AboutUsCard from '@/components/AboutMeCard'

const Home: NextPage = () => {
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
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#8D99AE"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0F172A"
        />
      </Head>

      <main className="bg-white/95 dark:bg-slate-900/[0.99025] sm:dark:bg-slate-900/[0.99025] sm:bg-white/[0.93] space-y-6 sm:space-y-9 flex flex-col w-full min-h-screen">
        <Header title="PassMan" />
        {/* Content */}
        <div className="flex flex-1 flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between sm:justify-around h-fit">
          {/* Heading */}
          <h2 className="sm:font-semibold font-medium sm:my-0 my-2 text-center sm:text-left dark:text-slate-400 text-slate-500/80 leading-[4.175rem] sm:leading-[5rem] drop-shadow-lg text-5xl sm:text-6xl w-[14rem] sm:w-[17rem]">
            <span className="text-laal">Let's</span> Have You Digitally{' '}
            <span className="text-laal">Safe!</span>
          </h2>
          {/* Forms */}
          {show ? (
            // signInForm
            <SignInForm />
          ) : (
            // SignUpForm
            <AboutUsCard />
          )}
        </div>
        {/* Footer */}
        <Footer name="Sushant Garudkar" />
      </main>
    </div>
  )
}

export default Home
