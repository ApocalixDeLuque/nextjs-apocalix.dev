
import Image from 'next/image'
import Link from 'next/link'
import CustomTooltip from '@/components/utils/CustomTooltip'
import { useLanguage } from './utils/LanguageContext'
import { menu, moon, web } from '../../public/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Navbar = () => {
    const router = useRouter()
    const { getText, toggleLanguage } = useLanguage()

    const [currentPath, setCurrentPath] = useState(router.asPath)
    const [text, setText] = useState('')


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
            i++
            
            if (i === currentPath.length) {
                clearInterval(interval)
            }
            }, 100)
            
            return () => {
                clearInterval(interval)
            }
      }, [currentPath])
  
    return (
        <section className='w-full flex justify-center sticky top-0 z-10 border-b-2 border-lightgray bg-light py-4 px-4 xs:px-16 xl:px-32 3xl:py-8'>
            <div className='text-[19px] xl:text-2xl 2xl:text-3xl 3xl:text-4xl w-full h-fit flex items-center justify-between max-w-[1800px]'>
                <div className='flex font-semibold items-center justify-center'>
                    <Link scroll={false} className='flex items-center gap-2 sm:gap-4' href='/'>
                        <Image className='w-6 h-6 flex' src={moon} alt='logo' />
                        <p>apocalix.dev</p>
                    </Link>
                    <div className='hidden xxs:flex'>
                        <p className='text-lightgray'>{text}<span className='blink'>_</span></p>
                    </div>
                </div>
                <div className='2xl:text-2xl 3xl:text-3xl flex items-center justify-center text-gray gap-6'>
                    <nav className=' hidden xl:flex gap-6'>
                        <Link scroll={false} href={`#${getText("home","inicio")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("home", "inicio")}</p></Link>
                        <Link scroll={false} href={`#${getText("projects","proyectos")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("projects", "proyectos")}</p></Link>
                        <Link scroll={false} href={`#${getText("about-me","sobre-mi")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("about me", "sobre mí")}</p></Link>
                        <Link scroll={false} href={`#${getText("contact","contacto")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("contact", "contacto")}</p></Link>
                    </nav>
                    <CustomTooltip followCursor title={<p>{getText('change to spanish', 'cambiar a inglés')}</p>}>
                        <div className='hidden md:flex items-center justify-center p-3 bg-transparent xl:bg-lightgray rounded-full gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' onClick={toggleLanguage}>
                            <Image src={web} alt='web' className='opacity-60 xl:opacity-100 w-4 xl:w-6 aspect-square group-hover:invert group-hover:opacity-100 transition-all duration-[250ms]'/>
                            <p className='text-gray flex lg:hidden group-hover:text-light transition-all duration-[250ms]'>{getText("en","es")}</p>
                            <p className='xl:text-dark text-gray hidden lg:flex group-hover:text-light transition-all duration-[250ms]'>{getText("english","español")}</p>
                        </div>
                    </CustomTooltip>
                    <div className='flex xl:hidden items-center justify-center p-1 sm:px-5 sm:py-2 xl:p-3 sm:bg-lightgray rounded-full gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' onClick={toggleLanguage}> {/* implement dropdown */}
                        <Image src={menu} alt='web' className='w-6 h-6 group-hover:invert transition-all duration-[250ms]'/>
                        <p className='hidden text-dark sm:flex group-hover:text-light transition-all duration-[250ms]'>menu</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar