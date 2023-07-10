import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any"/>
        <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png"/>
        <link rel="manifest" href="/favicons/manifest.webmanifest"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
