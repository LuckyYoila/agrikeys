import Head from 'next/head'
// import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Welcome to Agrikeys</title>
        <meta name="description" content="Welcome to Agrikeys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hello from the home page
      </div>
    </>
  )
}
