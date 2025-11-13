import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mai Coach</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
