import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import CustomTooltip from '@/components/utils/CustomTooltip';
import { useLanguage } from './utils/LanguageContext';
import { menu, moon, web, close, load } from '../../public/icons';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';

const NavLink = ({ text }: { text: string }) => {
    return (
        <Link scroll={false} href={`#${text}`}>
            <p className="hover:text-red transition-all duration-[250ms]">{text}</p>
        </Link>
    );
};

const Menu = ({ hide = false }: { hide: boolean }) => {
    const { getText } = useLanguage();
    return (
        <nav className={`${hide === true ? 'hidden lg:flex gap-6' : 'flex flex-col gap-2 lg:hidden'}`}>
            <NavLink text={getText('home', 'inicio')} />
            <NavLink text={getText('projects', 'proyectos')} />
            <NavLink text={getText('about-me', 'sobre-mi')} />
            <NavLink text={getText('contact', 'contacto')} />

            {hide === false ? <hr className="border-gray mb-3" /> : <></>}
        </nav>
    );
};

const Navbar = () => {
    const router = useRouter();
    const [isMainPage, setIsMainPage] = useState(false);
    const { getText, toggleLanguage } = useLanguage();

    const [currentPath, setCurrentPath] = useState(router.asPath);
    const [text, setText] = useState('');

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        setIsMainPage(router.pathname === '/');
        setCurrentPath(router.asPath);
        setText(router.asPath);

        const handleRouteChange = (url: string) => {
            setCurrentPath(url);
            setText(url);
        };

        router.events.on('hashChangeComplete', handleRouteChange);

        return () => {
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [router.pathname, router.asPath, router.events]);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setCurrentPath(url);
        };

        router.events.on('hashChangeComplete', handleRouteChange);

        return () => {
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        setText('');

        let i = 0;
        const interval = setInterval(() => {
            setText(currentPath.slice(0, i + 1));

            //remove following text if an interrogation mark is found
            if (currentPath[i] === '?' || currentPath[i] === '%') {
                setText(currentPath.slice(0, i));
                clearInterval(interval);
            }

            i++;

            if (i === currentPath.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [currentPath]);

    const [toggleMenu, setToggleMenu] = useState(false);

    const ToggleIcon = ({ src = load, toggle }: { src: StaticImageData; toggle: boolean }) => {
        return (
            <div className="flex select-none items-center justify-center rounded-[16px] gap-2 group hover:cursor-pointer" onClick={() => setToggleMenu(toggle)}>
                <Image src={src} alt="img" className="w-6 h-6" />
            </div>
        );
    };

    const MenuNavLink = ({
        text,
        img,
        hoverText,
        navigationLink = '',
        onClick
    }: {
        text: string;
        img?: StaticImageData;
        hoverText: string;
        navigationLink?: string;
        onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    }) => {
        return (
            <CustomTooltip followCursor title={<p>{hoverText}</p>}>
                <Link
                    className="flex items-center justify-center p-2 bg-transparent rounded-[16px] gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer"
                    scroll={false}
                    href={`${navigationLink}`}
                    onClick={onClick}
                >
                    {img ? (
                        <Image
                            src={img}
                            alt="img"
                            className="opacity-60 xl:opacity-100 w-4 xl:w-6 aspect-square group-hover:invert group-hover:opacity-100 transition-all duration-[250ms]"
                        />
                    ) : (
                        <></>
                    )}

                    <p className="xl:text-dark text-gray flex group-hover:text-light transition-all duration-[250ms]">{text}</p>
                </Link>
            </CustomTooltip>
        );
    };

    return (
        <section className="w-full flex justify-center sticky top-0 z-10 border-b-2 border-lightgray bg-light py-4 px-4 xs:px-16 xl:px-32 3xl:py-8">
            <div className="text-[19px] xl:text-xl 2xl:text-2xl 3xl:text-3xl w-full h-fit flex items-center justify-between max-w-[1800px]">
                <div className="flex font-semibold items-center justify-center">
                    <Link scroll={false} className="flex items-center gap-2 sm:gap-4" href="/" onClick={scrollToTop}>
                        <Image className="w-6 h-6 flex" src={moon} alt="logo" />
                        <p className="xl:text-2xl 2xl:text-3xl 3xl:text-4xl">apocalix.dev</p>
                    </Link>
                    <div className="hidden xxs:flex">
                        <p className="xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-lightgray">
                            {text}
                            <span className="blink">_</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center text-gray gap-6">
                    {isMainPage && <Menu hide />}
                    {toggleMenu ? <ToggleIcon src={close} toggle={false} /> : <ToggleIcon src={menu} toggle={true} />}
                    {toggleMenu && (
                        <div className="absolute rounded-[16px] 3xl:text-3xl top-[62.5px] xl:top-[66px] 2xl:top-[70px] 3xl:top-[106px] right-1 xs:right-[12px] sm:right-[52px] xl:right-[104px] 3xl:right-auto 3xl:translate-x-64 flex flex-col text-center bg-light p-3 border border-lightgray select-none">
                            {isMainPage && <Menu hide={false} />}

                            <MenuNavLink
                                text={getText('english', 'español')}
                                img={web}
                                hoverText={getText('change to spanish', 'cambiar a inglés')}
                                navigationLink=""
                                onClick={toggleLanguage}
                            />

                            <span className="pt-3"></span>
                            <hr className="border-gray" />
                            <span className="pt-3"></span>

                            <MenuNavLink
                                text={getText('home', 'inicio')}
                                hoverText={getText('go to home', 'ir a inicio')}
                                navigationLink="/"
                                onClick={scrollToTop}
                            />

                            <MenuNavLink
                                text={'links'}
                                hoverText={getText('visit my links', 'visita mis links')}
                                navigationLink="links"
                                onClick={scrollToTop}
                            />

                            <MenuNavLink
                                text={'charts'}
                                hoverText={getText('visit my charts', 'visita mis charts')}
                                navigationLink="charts"
                                onClick={scrollToTop}
                            />

                            <MenuNavLink text={'valorant'} hoverText={'valorant tracker'} navigationLink="valorant" onClick={scrollToTop} />

                            <CustomTooltip followCursor title={<p>{getText('admin login', 'inicio de admin')}</p>}>
                                <Link
                                    scroll={false}
                                    className="flex items-center justify-center p-2 bg-transparent rounded-[16px] gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer"
                                    href="/admin"
                                    onClick={scrollToTop}
                                >
                                    <p className="xl:text-dark text-gray flex group-hover:text-light transition-all duration-[250ms]">$ sudo</p>
                                </Link>
                            </CustomTooltip>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;
