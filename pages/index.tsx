import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="./pages/first">
        <a>
          <Button type="primary">First Page</Button>
        </a>
      </Link>
    </div>
  )
}

export default Home
