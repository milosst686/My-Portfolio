
import Collection from 'components/Collection'
import { CollectionBar } from 'components/CollectionBar'
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>BWS | Collection</title>
      </Head>
    <CollectionBar/>
    <Collection/>
    </div>
  )
}
