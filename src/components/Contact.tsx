
import Image from 'next/image'
import { useLanguage } from './utils/LanguageContext'
import { linkedin, mail } from '../../public/icons'
import Link from 'next/link'
import CustomTooltip from './utils/CustomTooltip'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'

const initValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const initState = { values: initValues }


const Hero = () => {
    var { getText } = useLanguage()
    const [state, setState] = useState(initState)

    return (
        <section id={getText("contact", "contacto")} className='w-full flex items-center justify-center pb-8 md:pb-16 xl:pb-32 pt-24 md:pt-32 px-8 sm:p-16 xl:pt-80 xl:px-32'>
            <div className='w-full h-fit text-center sm:text-start flex flex-col items-center gap-8 sm:gap-16 max-w-[1800px]'>
                <h2 className='w-full font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>{getText("contact", "contacto")} 📩</h2>
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-full flex justify-between items-center pb-5'>
                        <p className='text-lg md:text-[28px] xl:text-[32px] 2xl:text-[40px] 3xl:text-5xl'>me@apocalix.dev</p>
                        <div className='flex items-center gap-1 xxs:gap-4'>
                            <CustomTooltip followCursor title={<p>{getText("let's connect on linkedin!","¡conectémos en linkedin!")}</p>}>
                                <Link scroll={false} href='https://www.linkedin.com/in/apocalix/'>
                                    <Image className='h-6 xxs:h-8 lg:h-10 w-auto' src={linkedin} alt='linkedin'/>
                                </Link>
                            </CustomTooltip>
                            <CustomTooltip followCursor title={<p>{getText("send me an email!","¡mándame un correo!")}</p>}>
                                <Link scroll={false} href='mailto:contact@apocalix.dev'>
                                    <Image className='h-6 xxs:h-9 lg:h-12 w-auto' src={mail} alt='mail'/>
                                </Link>
                            </CustomTooltip>
                        </div>
                    </div>
                    <div className='w-full grid grid-row-2 lg:flex gap-3'>
                        <div className='w-full flex flex-col lg:max-w-[50%] gap-3'>
                            <input className='bg-lightgray rounded-[16px] text-dark p-3' placeholder='name'/>
                            <input className='bg-lightgray rounded-[16px] text-dark p-3' placeholder='email'/>
                            <input className='bg-lightgray rounded-[16px] text-dark p-3' placeholder='subject'/>
                        </div>
                        <textarea className='bg-lightgray rounded-[16px] text-dark p-3 w-full justify-start min-h-fit' rows={5} placeholder='message'/>
                    </div>
                    <div className='flex self-end py-3 px-6 bg-red rounded-[16px] gap-2 hover:bg-green transition-all duration-[250ms] group hover:cursor-pointer'>
                        <p className='text-light group-hover:text-light transition-all duration-[250ms]'>send</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero