import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mai Coach</title>
        <link rel="icon" href="/1BDAB43E-0386-44E2-AE67-CE391159B804.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
