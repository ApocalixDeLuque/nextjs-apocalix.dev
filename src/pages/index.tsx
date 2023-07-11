
import AboutMe from '@/components/AboutMe'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { Alert, Snackbar } from '@mui/material'
import { useLanguage } from '@/components/utils/LanguageContext'
import { useState } from 'react'

export default function Home() {
    const { getText } = useLanguage()
  
    const [infoOpen, setInfoOpen] = useState(true)
    const [warningOpen, setWarningOpen] = useState(true)
    
    const infoClose = () => {
        setInfoOpen(false)
    }
    
    const warningClose = () => {
        setWarningOpen(false)
    }

    return (
        <>
            <Head>
                <title>apocalix.dev | homepage</title>
            </Head>

            {/* TEMPORARY WARNINGS, REMOVE LATER */}
            <Snackbar open={infoOpen} autoHideDuration={6000}>
                <Alert className='flex items-center justify-center text-center' severity="info" onClose={infoClose}>
                    {getText("currently working on: responsive design and contact form", "actualmente trabajando en: diseño responsivo y formulario de contacto")} :)
                </Alert>
            </Snackbar>
            <Snackbar open={warningOpen} autoHideDuration={6000}>
                <Alert className='flex items-center justify-center text-center' severity="warning" onClose={warningClose}>
                    {getText("this page is in active development, it's normal to see visual or functional errors as of now.", "ésta página se encuentra en desarrollo activo, es normal encontrar fallas visuales o funcionales.")}
                </Alert>
            </Snackbar>

            <Hero/>
            <Projects/>
            <AboutMe/>
        </>
    )
}
