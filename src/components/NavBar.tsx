import Image from 'next/image'
import Link from 'next/link'
import CustomTooltip from '@/components/utils/CustomTooltip'
import { useLanguage } from './utils/LanguageContext';
import {moon, web} from '../../public/icons'

const Navbar = () => {
    const { language, getText, toggleLanguage } = useLanguage();

    return (
        <section className='w-full flex sticky top-0 z-10 border-b-2 border-lightgray items-center justify-between bg-light py-6 px-32'>
            <div className='flex text-3xl font-semibold items-center justify-center'>
                <Link className='flex justify-center items-center gap-4' href='/'>
                    <Image className='w-6 h-6 flex' src={moon} alt='logo' />
                    <p>apocalix.dev</p>
                </Link>
                <div className='flex'>
                    <p className='text-lightgray'>
                        /breadcrumbs<span className='blink'>_</span>
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center text-2xl text-gray gap-6'>
                <div className='flex gap-6'>
                    <p>{getText("projects", "proyectos")}</p>
                    <p>{getText("about me", "sobre mí")}</p>
                    <p>contact{getText("", "o")}</p>
                </div>
                <CustomTooltip followCursor title={<p>{language === 'en' ? 'change to spanish' : 'cambiar a inglés'}</p>}>
                    <div className='flex items-center justify-center p-3 bg-lightgray rounded-full gap-2 hover:bg-red transition-all duration-[250ms] group hover:cursor-pointer' onClick={toggleLanguage}>
                       <Image src={web} alt='web' className='w-6 h-6 group-hover:invert transition-all duration-[250ms]'/>
                       <p className='text-dark group-hover:text-light transition-all duration-[250ms]'>{getText("english","español")}</p>
                    </div>
                </CustomTooltip>
            </div>
        </section>
    )
}

export default Navbar