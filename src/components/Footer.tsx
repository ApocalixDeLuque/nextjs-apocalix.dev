import { moon } from "../../public/icons";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "./utils/LanguageContext";

const Footer = () => {
    const { getText } = useLanguage();
    return (
    <footer className='w-full flex items-center justify-center bg-dark gap-32 py-40'>
        <Link className='flex flex-row gap-4' href="/"> 
            <Image className='invert w-12' src={moon} alt='logo'></Image>
            <p className="text-5xl font-semibold text-light">apocalix.dev</p>
        </Link>
        <div className='flex gap-24'>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">{getText("go to","ir hacia")}</h2>
                <Link href="/home">
                    <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("start", "inicio")}</p>
                </Link>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("projects", "proyectos")}</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("about me", "sobre mí")}</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">contact{getText("", "o")}</p>
            </nav>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">contact{getText("", "o")}</h2>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">email</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">linkedin</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">github</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">whatsapp</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">discord</p>
            </nav>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">{getText("other", "otros")}</h2>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("socials", "redes")}</p>
                <p className="hover:text-red transition-all duration-[250ms] hover:cursor-pointer">{getText("coming soon", "próximamente")}</p>
            </nav>
        </div>
    </footer>
  )
}

export default Footer