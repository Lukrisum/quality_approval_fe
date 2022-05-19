import type { NextPage } from 'next'
import Index from '../components/groups/index'
import Head from '../components/common/head'

const Home: NextPage = () => {
  return (
    <Head>
      <Index/>
    </Head>
  )
}

export default Home
