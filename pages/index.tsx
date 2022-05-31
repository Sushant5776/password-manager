import Header from '@/components/Header'
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

      <main className="bg-white/[0.93] w-full h-screen">
        <Header />
      </main>
    </div>
  )
}

export default Home
