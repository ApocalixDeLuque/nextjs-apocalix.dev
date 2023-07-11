
import Image from 'next/image'
import Link from 'next/link'
import CustomTooltip from '@/components/utils/CustomTooltip'
import { useLanguage } from './utils/LanguageContext'
import { moon, web } from '../../public/icons'
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
        console.log(text),
        <section className='w-full flex justify-center sticky top-0 z-10 border-b-2 border-lightgray bg-light py-6 px-32'>
            <div className='w-full h-fit flex items-center justify-between max-w-[1800px]'>
                <div className='flex text-3xl font-semibold items-center justify-center'>
                    <Link scroll={false} className='flex items-center gap-4' href='/'>
                        <Image className='w-6 h-6 flex' src={moon} alt='logo' />
                        <p>apocalix.dev</p>
                    </Link>
                    <div className='flex'>
                        <p className='text-lightgray'>{text}<span className='blink'>_</span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center text-2xl text-gray gap-6'>
                    <nav className='flex gap-6'>
                        <Link scroll={false} href={`#${getText("home","inicio")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("home", "inicio")}</p></Link>
                        <Link scroll={false} href={`#${getText("projects","proyectos")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("projects", "proyectos")}</p></Link>
                        <Link scroll={false} href={`#${getText("about-me","sobre-mi")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("about me", "sobre mí")}</p></Link>
                        <Link scroll={false} href={`#${getText("contact","contacto")}`}><p className='hover:text-red transition-all duration-[250ms]'>{getText("contact", "contacto")}</p></Link>
                    </nav>
                    <CustomTooltip followCursor title={<p>{getText('change to spanish', 'cambiar a inglés')}</p>}>
                        <div className='flex items-center justify-center p-3 bg-lightgray rounded-full gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' onClick={toggleLanguage}>
                            <Image src={web} alt='web' className='w-6 h-6 group-hover:invert transition-all duration-[250ms]'/>
                            <p className='text-dark group-hover:text-light transition-all duration-[250ms]'>{getText("english","español")}</p>
                        </div>
                    </CustomTooltip>
                </div>
            </div>
        </section>
    )
}

export default Navbar