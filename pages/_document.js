// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon classique pour navigateurs */}
        <link rel="icon" href="/favicon.ico" />

        {/* Optionnel : Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.PNG" />

        {/* Optionnel : favicon en PNG pour navigateurs modernes */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
