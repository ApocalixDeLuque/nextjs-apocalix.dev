
import Image, { StaticImageData } from 'next/image'
import {web, github, external} from "../../public/icons"
import page1 from "../../public/page1.jpg"
import page2 from "../../public/page2.jpg"
import page3 from "../../public/page3.jpg"
import page4 from "../../public/page4.jpg"
import { useLanguage } from './utils/LanguageContext'

interface ProjectCardProps {
    title: string,
    preview: StaticImageData,
    pageURL: string,
    githubURL: string
}

const ProjectCard = ({title, preview, pageURL, githubURL}: ProjectCardProps) => {
    var { getText } = useLanguage()
    return (
        <div className='w-full flex flex-col items-start gap-4 border-2 border-lightgray rounded-[32px] p-12 hover:scale-[1.02] transition-all duration-[250ms]'>
            <h2 className='text-6xl pb-4'>{title}</h2>
            <a className='w-full aspect-video relative block bg-gray-900 group' href={pageURL}>
                <Image className='w-full h-full aspect-video rounded-lg absolute inset-0 object-cover group-hover:brightness-50 hover:cursor-pointer transition-all duration-[250ms]' src={preview} alt='project'/>
                <div className="flex h-full items-center justify-center relative p-5">
                    <div className="flex items-center justify-center transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 gap-4 p-2">
                        <Image className='w-8 aspect-square invert' src={external} alt='external'/>
                        <p className="text-center text-4xl text-white">{getText("visit site", "visitar página")}</p>
                    </div>
                </div>
            </a>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex items-center justify-center py-8 px-14 gap-4 rounded-[32px]  bg-lightgray  hover:bg-red hover:text-light hover:cursor-pointer group transition-all duration-[250ms]' onClick={() => window.open(githubURL, "_blank")}>
                    <Image className='w-12 aspect-square group-hover:invert transition-all duration-[250ms]' src={web} alt='webpage'></Image>
                    <p className='text-4xl'>{getText("see live","en vivo")}</p>
                </div>
                <div className='flex items-center justify-center py-8 px-14 gap-4 rounded-[32px] bg-lightgray hover:bg-red hover:text-light hover:cursor-pointer group transition-all duration-[250ms]' onClick={() => window.open(githubURL, "_blank")}>
                    <Image className='w-12 aspect-square group-hover:invert transition-all duration-[250ms]' src={github} alt='github'></Image>
                    <p className='text-4xl'>github</p>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    var { getText } = useLanguage()
    return (
        <section className='w-full flex flex-col items-center justify-center gap-32 py-16 px-32'>
            <h2 className='w-full font-semibold text-7xl'>{getText("projects", "proyectos")} 💻</h2>
            <div className='w-full grid grid-cols-2 gap-16 px-16'>
                <ProjectCard pageURL={"https://arteneural.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/arteneural"} title="arteneural" preview={page3}/>
                <ProjectCard pageURL={"https://apocalix-dev.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/apocalix.dev"} title="portfolio" preview={page2}/>
                <ProjectCard pageURL={"https://arteneural.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/react-testing"} title="image gallery" preview={page1}/>
                <ProjectCard pageURL={"https://login-system123.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/react-testing"} title="login system" preview={page4}/>
            </div>
        </section>
    )
}

export default Projects