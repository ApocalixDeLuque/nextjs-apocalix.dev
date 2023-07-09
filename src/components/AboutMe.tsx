import Image, { StaticImageData } from 'next/image';
import { c, css, dbarrow, docker, figma, git, github, google, html, java, js, notion, php, react, sass, todoist } from '../../public/icons';
import CustomTooltip from '@/components/utils/CustomTooltip';
import { useContext } from 'react';
import { LanguageContext } from '@/components/utils/LanguageContext';

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
            <div className={`w-fit flex ${divClassName.includes('flex-row-reverse') ?'flex-row-reverse' : 'flex-row' } gap-6${divClassName}`} onClick={() => { if (pageURL) window.open(pageURL, "_blank"); }}>
                <Image className='flex w-8 h-8 justify-center items-center' src={dbarrow} alt='arrow'/>
                <p className='text-4xl'>{text}</p>
            </div>
        </CustomTooltip>
    );
};

const IconList = ({ icon, text, opacity = "0.5" }: IconListProps) => {
    return (
        <div className='w-full max-w-[200px] flex flex-col justify-center items-center gap-8 hover:cursor-pointer hover:scale-110 transition-transform duration-300'>
            <Image className='flex justify-center items-center w-32 aspect-square opacity-50' style={{ opacity: opacity }} src={icon} alt='icon'/>
            <p className='w-full text-center text-4xl'>{text}</p>
        </div>
    );
};

const AboutMe = () => {
    const { language } = useContext(LanguageContext);
  
    const getText = (enText: string, esText: string) => {
      return language === 'en' ? enText : esText;
    };

    return (
        <section className='py-16 px-32 '>
            <div className="w-full flex flex-col items-center justify-center gap-32">
                <div className="w-full items-start">
                    <h2 className="w-full font-semibold text-7xl">about me 🧐</h2>
                </div>
                <div className="w-full flex gap-8 items-center justify-between">
                    <div className="flex flex-col justify-items-start gap-8">
                        <TextList tooltipText={getText("at universidad de guanajuato", "en la universidad de guanajuato")}      text={getText("computer science student", "estudiante de sistemas computacionales")} />
                        <TextList tooltipText={getText("lived 8 years in usa!", "¡vivi 8 años en estados unidos!")}             text={getText("english-spanish bilingual", "bilingüe ingles-español")} />
                        <TextList tooltipText={getText("minecraft fan:)", "fan de minecraft:)")}                                text={getText("first developed due to videogame passion", "empecé a desarrollar por pasión a los videojuegos")} />
                        <TextList tooltipText={getText("self taught frontend & design", "autodidacta en frontend y diseño")}    text={getText("aim to become a fullstack dev", "mi objetivo es convertirme en un desarrollador fullstack")} />
                        <TextList tooltipText={getText("click to see my charts!", "¡haz clic para ver mis stats!")}             text={getText("music lover", "amante de la música")}
                                    divClassName=' line-through decoration-4 hover:cursor-pointer hover:text-red hover:no-underline transition-all duration-300'
                                    pageURL={"https://www.last.fm/es/user/ApocalixDeLuque"}/>
                    </div>

                    <div className='aboutme__container-list_secret'>
                        <TextList divClassName=' flex-row-reverse justify-items-end opacity-20 hover:opacity-100 hover:cursor-pointer transition-all duration-300' placement="bottom" tooltipText="unimportant stuff" text="🤫"></TextList>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-36 py-80">
                <div className="w-full flex flex-col justify-center items-center gap-32">
                    <h2 className='text-5xl'>languages i speak:</h2>
                    <div className="w-full flex justify-between items-center gap-6 px-24">
                        <IconList icon={java} text="java" />
                        <IconList icon={c} text="c" />
                        <IconList icon={html} text="html" />
                        <IconList icon={js} text="javascript" />
                        <IconList icon={css} text="css" />
                        <IconList icon={php} text="php" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-32">
                    <h2 className='text-5xl'>software / libraries:</h2>
                    <div className="w-full flex justify-between items-center gap-6 px-24">
                        <IconList icon={git} text="git" />
                        <IconList icon={docker} text="docker" />
                        <IconList icon={react} text="react" />
                        <IconList icon={sass} text="sass" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-32">
                    <h2 className='text-5xl'>daily tools:</h2>
                    <div className="w-full flex justify-between items-center gap-6 px-24">
                        <IconList opacity="1" icon={notion} text="notion" />
                        <IconList opacity="1" icon={figma} text="figma" />
                        <IconList opacity="1" icon={google} text="google workspace" />
                        <IconList opacity="1" icon={github} text="github" />
                        <IconList opacity="1" icon={todoist} text="todoist" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
