
import { moon } from '../../public/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from './utils/LanguageContext'

const Footer = () => {
    const { getText } = useLanguage();
    return (
    <footer className='w-full flex flex-col xl:flex-row items-center justify-center bg-dark gap-32 py-40'>
        <Link scroll={false} className='flex flex-row gap-4' href="/"> 
            <Image className='invert w-12' src={moon} alt='logo'></Image>
            <p className="text-5xl font-semibold text-light">apocalix.dev</p>
        </Link>
        <div className='flex gap-24'>
            <nav className='flex flex-col text-xl xl:text-2xl 2xl:text-3xl font-thin text-light gap-2 xl:gap-4'>
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-light pb-4">{getText("go to","ir hacia")}</h2>
                <Link scroll={false} href={`#${getText("home","inicio")}`}><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("home", "inicio")}</p></Link>
                <Link scroll={false} href={`#${getText("projects","proyectos")}`}><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("projects", "proyectos")}</p></Link>
                <Link scroll={false} href={`#${getText("about-me", "sobre-mi")}`}><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("about me", "sobre mí")}</p></Link>
                <Link scroll={false} href={`#${getText("contact", "contacto")}`}><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("contact", "contacto")}</p></Link>
            </nav>
            <nav className='flex flex-col text-xl xl:text-2xl 2xl:text-3xl font-thin text-light gap-2 xl:gap-4'>
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-light pb-4">contact{getText("", "o")}</h2>
                <Link scroll={false} href='mailto:contact@apocalix.dev'><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">email</p></Link>
                <Link scroll={false} href='https://github.com/ApocalixDeLuque'><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">github</p></Link>
                <Link scroll={false} href='https://www.linkedin.com/in/apocalix/'><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">linkedin</p></Link>
                <Link scroll={false} href='https://discord.com/users/441795026956320778'><p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">discord</p></Link>
            </nav>
            <nav className='flex flex-col text-xl xl:text-2xl 2xl:text-3xl font-thin text-light gap-2 xl:gap-4'>
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-light pb-4">{getText("other", "otros")}</h2>
                {/* TODO: make social media links page (w/twitter, twitch, etc. styled like discord/linktree/cardd) */}
                {/* 🔽  className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer" */}
                <p>{getText("socials", "redes")}</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("coming soon", "próximamente")}</p>
            </nav>
        </div>
    </footer>
  )
}

export default Footer