
import Image from "next/image";
import programmer from "../../public/programmer.svg";
import { useLanguage } from "./utils/LanguageContext";

const Hero = () => {
    var { getText } = useLanguage()
    return (
        <section className="flex h-[95vh] w-full justify-between items-center border-b-2 border-lightgray bg-[url('../../public/hero-pattern.png')] bg-center py-16 px-32">
            <div className='w-fit min-w-[40vw] flex flex-col gap-16'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-7xl font-semibold'>{getText("hello", "hola")}! 👋</h2>
                    <p className='text-5xl'>{getText("my name is", "mi nombre es")} jonathan, aka<span className='text-red'> apocalix</span> :)</p>
                </div>
                <div className='flex w-fit bg-lightgray px-14 py-8 rounded-[32px] hover:bg-red hover:text-light hover:cursor-pointer transition-all duration-[250ms]'>
                    <p className='text-5xl'>{getText("about me", "sobre mí")}</p>
                </div>
            </div>
            <div>
                <Image src={programmer} alt='programmer'></Image>
            </div>
        </section>
    )
}

export default Hero