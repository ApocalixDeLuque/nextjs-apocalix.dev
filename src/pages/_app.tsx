import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layout/MainLayout'
import { Poppins } from 'next/font/google'
import { LanguageProvider } from '@/components/utils/LanguageContext';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <LanguageProvider>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
      </LanguageProvider>
    </main>
  )
}
