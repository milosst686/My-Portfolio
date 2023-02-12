
import HomePage from 'components/HomePage'
import { Navbar } from 'components/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BWS | NFT's</title>
      </Head>
      <Navbar />
      <HomePage />
    </div>
  )
}
