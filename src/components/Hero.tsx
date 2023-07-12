
import Image from 'next/image'
import programmer from '../../public/programmer.svg'
import { useLanguage } from './utils/LanguageContext'
import Link from 'next/link'

const Hero = () => {
    var { getText } = useLanguage()
    return (
        <section id={`${getText("home","inicio")}`} className="flex min-h-screen w-full justify-center items-center border-b-2 border-lightgray bg-[url('../../public/hero-pattern.png')] bg-center py-8 md:py-16 px-8 sm:p-16 xl:py-40 xl:px-32">
            <div className='w-full h-fit flex flex-col xl:flex-row items-center justify-between max-w-[1800px] gap-8 sm:gap-20'>
                <div className='flex flex-col xl:grid text-[28px] xl:text-[32px] 2xl:text-[40px] 3xl:text-5xl md:min-w-[400px] max-w-fit gap-4 md:gap-6 2xl:gap-16 items-center xl:items-start'>
                    <div className='flex flex-col gap-2 md:gap-4 2xl:gap-8 text-center xl:text-start items-center xl:items-start'>
                        <h2 className='w-full font-semibold text-4xl xs:text-5xl xl:text-6xl 2xl:text-7xl'>{getText("hello", "hola")}! 👋</h2>
                        <p className='py-4 sm:p-0'>{getText("my name is", "mi nombre es")} jonathan, aka<span className='text-red'> apocalix</span> :)</p>
                    </div>
                    <Link scroll={false} className='w-fit' href={`#${getText("about-me","sobre-mi")}`}>
                        <div className='flex bg-lightgray py-4 px-6 lg:px-10 lg:py-6 3xl:px-14 3xl:py-8 rounded-[32px] hover:bg-red hover:text-light hover:cursor-pointer transition-all duration-[250ms]'>
                            <p className=''>{getText("about me", "sobre mí")}</p>
                        </div>
                    </Link>
                </div>
                <div className='flex items-start justify-center w-full xxs:w-3/5 sm:w-full md:w-[90%] min-900:w-[680px] 2xl:w-[800px] xxs:min-w-[300px] p-8 sm:p-16'>
                    <Image src={programmer} alt='programmer'></Image>
                </div>
            </div>
        </section>
    )
}

export default Hero