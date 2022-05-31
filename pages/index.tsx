import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignInForm from '@/components/SignInForm'
import SignUpForm from '@/components/SignUpForm'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div
      style={{
        background: 'url(./images/leaves.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
      className="w-full h-screen"
    >
      <Head>
        <title>Password Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white/[0.93] flex flex-col w-full h-screen">
        <Header />
        {/* Content */}
        <div className="flex flex-1 items-center justify-around h-fit">
          {/* Heading */}
          <h2 className="font-semibold text-rakhadi leading-[5rem] drop-shadow-lg text-6xl w-[17rem]">
            <span className="text-laal">Let's</span> Have You Digitally{' '}
            <span className="text-laal">Safe!</span>
          </h2>
          {/* Forms */}
          <div>
            {/* SignInForm */}
            {/* <SignInForm /> */}
            {/* SignUpForm */}
            <SignUpForm />
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default Home
