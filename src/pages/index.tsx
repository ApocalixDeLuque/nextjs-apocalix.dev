import AboutMe from '@/components/AboutMe'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <>
            <Head>
                <title>apocalix.dev | hello!</title>
            </Head>
            <Hero/>
            <Projects/>
            <AboutMe/>
        </>
    )
}
