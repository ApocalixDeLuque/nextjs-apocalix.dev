
import { c, css, dbarrow, docker, figma, git, github, google, html, java, js, nextjs, notion, php, react, sass, tailwind, todoist, ts, vscode } from '../../public/icons'
import Image, { StaticImageData } from 'next/image'
import { useLanguage } from './utils/LanguageContext'
import CustomTooltip from './utils/CustomTooltip'

interface TextListProps{
    pageURL?: string;
    fontSize?: number;
    placement?: "top" | "bottom" | "left" | "right";
    text: string;
    tooltipText: string;
    divClassName?: string;
}

interface IconListProps {
    icon: StaticImageData;
    text: string;
    opacity?: string;
    className?: string;
}

const TextList = ({ divClassName='', pageURL, fontSize = 24, placement = "top", text, tooltipText }: TextListProps) => {
    return (
        <CustomTooltip size={fontSize} followCursor placement={placement} title={<p>{tooltipText}</p>}>
            <div className={`w-fit flex items-center ${divClassName.includes('flex-row-reverse') ?'flex-row-reverse' : 'flex-row' } gap-3 md:gap-6${divClassName}`} onClick={() => { if (pageURL) window.open(pageURL, "_blank"); }}>
                <Image className='flex w-4 md:w-8 aspect-square justify-center items-center' src={dbarrow} alt='arrow'/>
                <p className='text-lg md:text-[28px] xl:text-[32px] 2xl:text-[40px] 3xl:text-5xl'>{text}</p>
            </div>
        </CustomTooltip>
    );
};

const IconList = ({ icon, text, opacity = "0.5" }: IconListProps) => {
    return (
        <div className='lg:w-full lg:max-w-[200px] flex flex-col justify-center items-center gap-4 xl:gap-6 2xl:gap-8 hover:cursor-pointer hover:scale-110 transition-transform duration-300'>
            <Image className='flex justify-center items-center w-10 md:w-16 lg:w-20 xl:w-24 2x:w-32 aspect-square opacity-50' style={{opacity}} src={icon} alt='icon'/>
            <p className='max-w-[100px] sm:max-w-[200px] w-full text-center text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl'>{text}</p>
        </div>
    );
};

const AboutMe = () => {
    const { getText } = useLanguage();

return (
        <section id={getText("about-me", "sobre-mi")} className='w-full flex items-center justify-center pt-24 md:pt-32 px-8 sm:p-16 xl:pt-80 xl:px-32'>
            <div className='w-full h-fit flex flex-col gap-16 xl:gap-20 2xl:gap-32 justify-center max-w-[1800px]'>
                <div className="w-full flex flex-col items-center justify-center gap-8 sm:gap-16 xl:gap-32">
                    <div className="w-full items-start">
                        <h2 className='w-full font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>{getText("about me","sobre mí")} 🧐</h2>
                    </div>
                    <div className="w-full flex gap-8 items-center justify-between flex-wrap">
                        <div className="flex flex-col justify-items-start gap-4 md:gap-8 xl:gap-12">
                            <TextList tooltipText={"@ universidad de guanajuato"}                                                   text={getText("computer science student", "estudio sistemas computacionales")} />
                            <TextList tooltipText={getText("lived 8 years in usa!", "¡vivi 8 años en estados unidos!")}             text={getText("english-spanish bilingual", "bilingüe ingles-español")} />
                            <TextList tooltipText={getText("minecraft fan:)", "fan de minecraft:)")}                                text={getText("first developed due to videogame passion", "empecé a desarrollar por pasión a los videojuegos")} />
                            <TextList tooltipText={getText("self taught frontend & design", "autodidacta en frontend y diseño")}    text={getText("aim to become a fullstack dev", "apunto a ser desarrollador fullstack")} />
                            <TextList tooltipText={getText("click to see my charts!", "¡click para ver mis charts!")}               text={getText("music lover", "amo la música")}
                                        divClassName=' line-through decoration-4 hover:cursor-pointer hover:text-red hover:no-underline transition-all duration-[250ms]'
                                        pageURL={"https://www.last.fm/es/user/ApocalixDeLuque"}/>
                        </div>
                        <div className='aboutme__container-list_secret'>
                            <TextList divClassName=' flex-row-reverse justify-items-end opacity-20 hover:opacity-100 hover:cursor-pointer transition-all duration-[250ms]' placement="bottom" tooltipText={getText("unimportant facts","datos no importantes")} text="🤫"></TextList>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:gap-28 xl:gap-36 xl:pt-80">
                    <div className="w-full text-center flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-24 xl:gap-32">
                        <h2 className='text-3xl 2xl:text-4xl 3xl:text-5xl'>{getText("languages i know","lenguajes que sé")}:</h2>
                        <div className="w-full flex flex-wrap justify-evenly items-center gap-4 md:gap-6 xl:px-24">
                            <IconList icon={java} text="java" />
                            <IconList icon={c} text="c" />
                            <IconList icon={html} text="html" />
                            <IconList icon={css} text="css" />
                            <IconList icon={php} text="php" />
                            <IconList icon={js} text="javascript" />
                            <IconList icon={ts} text="typescript" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-24 xl:gap-32">
                        <h2 className='text-3xl 2xl:text-4xl 3xl:text-5xl'>{getText("other","otros")}:</h2>
                        <div className="w-full flex flex-wrap justify-evenly items-center gap-4 md:gap-6 xl:px-24">
                            <IconList icon={nextjs} text="next.js" />
                            <IconList icon={git} text="git" />
                            <IconList icon={docker} text="docker" />
                            <IconList icon={react} text="react" />
                            <IconList icon={sass} text="sass" />
                            <IconList icon={tailwind} text="tailwind" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-24 xl:gap-32">
                        <h2 className='text-3xl 2xl:text-4xl 3xl:text-5xl'>{getText("daily tools","herramientas")}:</h2>
                        <div className="w-full flex flex-wrap justify-evenly items-center gap-4 md:gap-6 xl:px-24">
                            <IconList opacity="1" icon={notion} text="notion" />
                            <IconList opacity="1" icon={figma} text="figma" />
                            <IconList opacity="1" icon={github} text="github" />
                            <IconList opacity="1" icon={todoist} text="todoist" />
                            <IconList opacity="1" icon={vscode} text="vs code" />
                            <IconList opacity="1" icon={google} text="google workspace" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
