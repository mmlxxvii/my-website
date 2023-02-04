import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mmlxxvii</title>
        <link
          rel="shortcut icon"
          href="https://64.media.tumblr.com/cfa9d7792857d6ae11fdbea13722e947/tumblr_po3avsvOak1v3sej5_540.jpg"
          type="image/x-icon">
        </link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
