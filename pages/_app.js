import '../styles/globals.css'
import Head from 'next/head'
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mai</title>
        <link rel="icon" href="/1BDAB43E-0386-44E2-AE67-CE391159B804.png" />
      </Head>

      <Component {...pageProps} />

      <footer style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        padding: "25px",
        marginTop: "40px",
        borderTop: "1px solid #eee",
        fontSize: "14px"
      }}>
        <span>© 2026 Mai</span>

        <a href="https://www.instagram.com/maicoa.ch/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>

        <a href="https://tiktok.com/@maicoa.ch" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={20} />
        </a>

        <a href="https://youtube.com/@maicoach" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={20} />
        </a>

      </footer>
    </>
  )
}

export default MyApp