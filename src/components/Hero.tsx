
import Image from 'next/image'
import programmer from '../../public/programmer.svg'
import { useLanguage } from './utils/LanguageContext'
import Link from 'next/link'

const Hero = () => {
    var { getText } = useLanguage()
    return (
        <section id={`${getText("home","inicio")}`} className="flex min-h-screen w-full justify-center items-center border-b-2 border-lightgray bg-[url('../../public/hero-pattern.png')] bg-center py-16 px-32">
            <div className='w-full h-fit flex flex-col xl:flex-row items-center justify-between max-w-[1800px] gap-20'>
                <div className='flex flex-col text-[28px] xl:grid xl:text-[32px] 2xl:text-[40px] min-w-[400px] max-w-fit gap-4 md:gap-6 2xl:gap-16 items-center xl:items-start'>
                    <div className='flex flex-col gap-2 md:gap-4 2xl:gap-8 text-center xl:text-start items-center xl:items-start'>
                        <h2 className='text-[40px] xl:text-5xl 2xl:text-6xl font-semibold'>{getText("hello", "hola")}! 👋</h2>
                        <p className=''>{getText("my name is", "mi nombre es")} jonathan, aka<span className='text-red'> apocalix</span> :)</p>
                    </div>
                    <Link href={`#${getText("about-me","sobre-mi")}`}>
                        <div className='flex w-fit bg-lightgray py-4 px-6 2xl:px-14 2xl:py-8 rounded-[32px] hover:bg-red hover:text-light hover:cursor-pointer transition-all duration-[250ms]'>
                            <p className=''>{getText("about me", "sobre mí")}</p>
                        </div>
                    </Link>
                </div>
                <div className='flex items-start justify-center w-3/5 xl:w-2/5 min-w-[400px]'>
                    <Image src={programmer} alt='programmer'></Image>
                </div>
            </div>
        </section>
    )
}

export default Hero