import AboutMe from '@/components/AboutMe'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>apocalix.dev | hello!</title>
      </Head>
      <section>
        <AboutMe/>
      </section>
    </main>
  )
}
