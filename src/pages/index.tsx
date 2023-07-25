import AboutMe from '@/components/AboutMe';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { Alert, Snackbar } from '@mui/material';
import { useLanguage } from '@/components/utils/LanguageContext';
import { useState } from 'react';
import Contact from '@/components/Contact';

export default function Home() {
    const { getText } = useLanguage();

    const [infoOpen, setInfoOpen] = useState(true);
    const [warningOpen, setWarningOpen] = useState(true);

    const infoClose = () => {
        setInfoOpen(false);
    };

    const warningClose = () => {
        setWarningOpen(false);
    };

    return (
        <>
            <Head>
                <title>apocalix.dev | homepage</title>
            </Head>

            {/* TEMPORARY WARNINGS, REMOVE LATER */}
            {/* TODO : Add font family natively to the website */}
            {/* TODO : Add background png to display on production */}
            {/* TODO : Update / slash when going to a new p[age in navbar */}

            <Snackbar open={infoOpen} autoHideDuration={6000}>
                <Alert
                    className="flex items-center justify-center text-center"
                    severity="info"
                    onClose={infoClose}
                >
                    {getText(
                        'currently working on: social media page',
                        'actualmente trabajando en: página de redes sociales'
                    )}{' '}
                    :)
                </Alert>
            </Snackbar>
            <Snackbar open={warningOpen} autoHideDuration={6000}>
                <Alert
                    className="flex items-center justify-center text-center"
                    severity="warning"
                    onClose={warningClose}
                >
                    {getText(
                        'this page is in active development, you may encounter errors.',
                        'ésta página se encuentra en desarrollo activo, podrías encontrar errores.'
                    )}
                </Alert>
            </Snackbar>

            <Hero />
            <Projects />
            <AboutMe />
            <Contact />
        </>
    );
}
