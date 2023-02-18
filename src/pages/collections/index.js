import CollectionRandom from 'components/CollectionRandom'
import { CollectionRandomBar } from 'components/CollectionRandomBar'
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>BWS | Collection</title>
      </Head>
    <CollectionRandomBar/>
    <CollectionRandom />
    </div>
  )
}
