import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layout/MainLayout'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <MainLayout>
        <Component {...pageProps}/>
      </MainLayout>
    </main>
  )
}
