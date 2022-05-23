import type { NextPage } from 'next'
import Index from '../components/groups/index'
import Head from '../components/common/head'

if (typeof window !== 'undefined') {
  const  {scollManeger}  = require('../utils/scroll_maneger')
  // console.log(scollManeger)
  scollManeger()
}

const Home: NextPage = () => {
  return (
    // <ScrollBack>
    <Head>
      <Index />
    </Head>
    // {/* </ScrollBack> */}
  )
}

export default Home
