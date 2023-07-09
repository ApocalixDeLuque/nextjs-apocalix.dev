import CustomTooltip from '@/components/utils/CustomTooltip'
import moon from "../../public/icons/moon.png"
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';
import { LanguageContext } from '@/components/utils/LanguageContext';

const Navbar = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

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
                    <p>projects</p>
                    <p>about me</p>
                    <p>contact</p>
                </div>
                <CustomTooltip followCursor title={<p>{language === 'en' ? 'cambiar lenguaje' : 'change language'}</p>}>
                    {/* TODO: On click change page language and text color of en/es */}
                    <div className='flex p-3 bg-lightgray rounded-full gap-1 hover:bg-red transition-all group hover:cursor-pointer' onClick={toggleLanguage}>
                        <p className='text-dark'>en</p>
                        <p className='text-dark'>/</p>
                        <p className='group-hover:text-light transition-all'>es</p>
                    </div>
                </CustomTooltip>
            </div>
        </section>
    )
}

export default Navbar