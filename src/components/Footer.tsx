import { moon } from '../../public/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './utils/LanguageContext';

const Footer = () => {
    const { getText } = useLanguage();
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer className="w-full flex flex-col xl:flex-row items-center justify-center bg-dark gap-16 md:gap-32 py-32 px-8 sm:p-16 xl:py-40 xl:px-32">
            <Link
                scroll={false}
                className="w-fit flex flex-row gap-4"
                href="/"
                onClick={scrollToTop}
            >
                <Image
                    className="invert w-8 h-8 xs:h-10 xs:w-10 md:h-12 md:w-12"
                    src={moon}
                    alt="logo"
                ></Image>
                <p className="text-3xl xxs:text-4xl font-semibold text-light">
                    apocalix.dev
                </p>
            </Link>
            <div className="w-full sm:w-fit flex flex-col items-start sm:flex-row gap-10 md:gap-24 xxs:px-8 xs:p-16 md:p-0">
                <nav className="flex flex-col text-xl 2xl:text-2xl 3xl:text-3xl font-normal md:font-thin 3xl:font-normal text-light gap-2 xl:gap-4">
                    <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-light pb-4">
                        {getText('go to', 'ir hacia')}
                    </h2>
                    <Link scroll={false} href={`#${getText('home', 'inicio')}`}>
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('home', 'inicio')}
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href={`#${getText('projects', 'proyectos')}`}
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('projects', 'proyectos')}
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href={`#${getText('about-me', 'sobre-mi')}`}
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('about me', 'sobre mí')}
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href={`#${getText('contact', 'contacto')}`}
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('contact', 'contacto')}
                        </p>
                    </Link>
                </nav>
                <nav className="flex flex-col text-xl 2xl:text-2xl 3xl:text-3xl font-normal md:font-thin 3xl:font-normal text-light gap-2 xl:gap-4">
                    <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-light pb-4">
                        contact{getText('', 'o')}
                    </h2>
                    <Link scroll={false} href="mailto:contact@apocalix.dev">
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            email
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href="https://github.com/ApocalixDeLuque"
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            github
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href="https://www.linkedin.com/in/apocalix/"
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            linkedin
                        </p>
                    </Link>
                    <Link
                        scroll={false}
                        href="https://discord.com/users/441795026956320778"
                    >
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            discord
                        </p>
                    </Link>
                </nav>
                <nav className="flex flex-col text-xl 2xl:text-2xl 3xl:text-3xl font-normal md:font-thin 3xl:font-normal text-light gap-2 xl:gap-4">
                    <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-light pb-4">
                        {getText('other', 'otros')}
                    </h2>
                    {/* TODO: make social media links page (w/twitter, twitch, etc. styled like discord/linktree/cardd) */}
                    {/* 🔽  className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer" */}
                    <Link href={`/links`}>
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('social links', 'mis redes')}
                        </p>
                    </Link>
                    <Link href={`/charts`}>
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            {getText('my music', 'mi música')}
                        </p>
                    </Link>
                    <Link href={`/valorant`}>
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            valorant tracker
                        </p>
                    </Link>
                    <Link href={`/admin`}>
                        <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">
                            $ sudo
                        </p>
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
