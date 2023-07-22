
import Image from 'next/image'
import Link from 'next/link'
import CustomTooltip from '@/components/utils/CustomTooltip'
import { useLanguage } from './utils/LanguageContext'
import { menu, moon, web, close } from '../../public/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Menu = () => {
    const { getText } = useLanguage()
    return (
        <nav className='flex flex-col gap-2 lg:hidden'>
            <Link scroll={false} href={`#${getText("home","inicio")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("home", "inicio")}</p></Link>
            <Link scroll={false} href={`#${getText("projects","proyectos")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("projects", "proyectos")}</p></Link>
            <Link scroll={false} href={`#${getText("about-me","sobre-mi")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("about me", "sobre mí")}</p></Link>
            <Link scroll={false} href={`#${getText("contact","contacto")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("contact", "contacto")}</p></Link>

            <hr className='border-lightgray'/>
        </nav>
    )
}

const Navbar = () => {
    const router = useRouter()
    const { getText, toggleLanguage } = useLanguage()

    const [currentPath, setCurrentPath] = useState(router.asPath)
    const [text, setText] = useState('')

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setCurrentPath(url)
        }
        
        router.events.on('hashChangeComplete', handleRouteChange)
        
        return () => {
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])


    useEffect(() => {
            setText('')
            
            let i = 0
            const interval = setInterval(() => {
            setText(currentPath.slice(0, i + 1))

            //remove following text if an interrogation mark is found
            if (currentPath[i] === '?' || currentPath[i] === '%') {
                setText(currentPath.slice(0, i))
                clearInterval(interval)
            }

            i++
            
            if (i === currentPath.length) {
                clearInterval(interval)
            }
            }, 100)
            
            return () => {
                clearInterval(interval)
            }
      }, [currentPath])

      const [toggleMenu, setToggleMenu] = useState(false)
  
    return (
        <section className='w-full flex justify-center sticky top-0 z-10 border-b-2 border-lightgray bg-light py-4 px-4 xs:px-16 xl:px-32 3xl:py-8'>
            <div className='text-[19px] xl:text-2xl 2xl:text-3xl 3xl:text-4xl w-full h-fit flex items-center justify-between max-w-[1800px]'>
                <div className='flex font-semibold items-center justify-center'>
                    <Link scroll={false} className='flex items-center gap-2 sm:gap-4' href='/' onClick={scrollToTop}>
                        <Image className='w-6 h-6 flex' src={moon} alt='logo' />
                        <p>apocalix.dev</p>
                    </Link>
                    <div className='hidden xxs:flex'>
                        <p className='text-lightgray'>{text}<span className='blink'>_</span></p>
                    </div>
                </div>
                <div className='2xl:text-2xl 3xl:text-3xl flex items-center justify-center text-gray gap-6'>
                    {/* TODO: fix so that this is hidden if not on mainpage. */}
                    {/* TODO: add an "other" button to navigate to pages shown in footer */}
                    <nav className=' hidden lg:flex gap-6'>
                        <Link scroll={false} href={`#${getText("home","inicio")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("home", "inicio")}</p></Link>
                        <Link scroll={false} href={`#${getText("projects","proyectos")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("projects", "proyectos")}</p></Link>
                        <Link scroll={false} href={`#${getText("about-me","sobre-mi")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("about me", "sobre mí")}</p></Link>
                        <Link scroll={false} href={`#${getText("contact","contacto")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("contact", "contacto")}</p></Link>
                    </nav>
                    {toggleMenu
                        ? 
                        <div className='flex select-none items-center justify-center rounded-[16px] gap-2 group hover:cursor-pointer' onClick={() => setToggleMenu(false)}> {/* implement dropdown */}
                            <Image src={close} alt='web' className='w-6 h-6'/>
                        </div>
                        :   
                        <div className='flex select-none items-center justify-center rounded-[16px] gap-2 group hover:cursor-pointer' onClick={() => setToggleMenu(true)}> {/* implement dropdown */}
                            <Image src={menu} alt='web' className='w-6 h-6'/>
                        </div>
                    }
                        {toggleMenu && (
                            <div className='absolute rounded-[16px] 3xl:text-3xl top-[68px] sm:top-[80px] right-1 xs:right-[12px] sm:right-[52px] xl:right-[104px] flex flex-col text-center gap-4 bg-light p-4 border border-lightgray select-none'>
                                <Menu />

                                <CustomTooltip followCursor title={<p>{getText('change to spanish', 'cambiar a inglés')}</p>}>
                                    <div className='flex items-center justify-center p-3 bg-transparent rounded-[16px] gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' onClick={toggleLanguage}>
                                        <Image src={web} alt='web' className='opacity-60 xl:opacity-100 w-4 xl:w-6 aspect-square group-hover:invert group-hover:opacity-100 transition-all duration-[250ms]'/>
                                        <p className='xl:text-dark text-gray flex group-hover:text-light transition-all duration-[250ms]'>{getText("english","español")}</p>
                                    </div>
                                </CustomTooltip>

                                <hr className='border-lightgray'/>

                                <CustomTooltip followCursor title={<p>{getText('admin login', 'inicio de admin')}</p>}>
                                    <Link scroll={false} className='flex items-center justify-center p-3 bg-transparent rounded-[16px] gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' href='/admin' onClick={scrollToTop}>
                                        <p className='xl:text-dark text-gray flex group-hover:text-light transition-all duration-[250ms]'>$ sudo</p>
                                    </Link>
                                </CustomTooltip>
                            </div>
                        )}
                
                </div>
            </div>
        </section>
        
    )
}

export default Navbar