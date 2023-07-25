import Image, { StaticImageData } from 'next/image';
import { web, github, external } from '../../public/icons';
import page1 from '../../public/page1.jpg';
import page2 from '../../public/page2.jpg';
import page3 from '../../public/page3.jpg';
import page4 from '../../public/page4.jpg';
import { useLanguage } from './utils/LanguageContext';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    preview: StaticImageData;
    pageURL: string;
    githubURL: string;
}

const ProjectCard = ({
    title,
    preview,
    pageURL,
    githubURL
}: ProjectCardProps) => {
    var { getText } = useLanguage();
    return (
        <div className="w-full flex flex-col items-center sm:items-start gap-4 border-2 border-lightgray rounded-[32px] p-4 sm:p-8 xl:pt-9 2xl:p-10 hover:scale-[1.02] transition-all duration-[250ms]">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl sm:pb-2 xl:pb-4">
                {title}
            </h2>
            <Link
                scroll={false}
                className="w-full aspect-video relative block bg-gray-900 group"
                href={pageURL}
            >
                <Image
                    className="w-full h-full aspect-video rounded-lg absolute inset-0 object-cover group-hover:brightness-50 hover:cursor-pointer transition-all duration-[250ms]"
                    src={preview}
                    alt="project"
                />
                <div className="flex h-full items-center justify-center relative p-5">
                    <div className="flex items-center justify-center transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 gap-4 p-2">
                        <Image
                            className="w-8 aspect-square invert"
                            src={external}
                            alt="external"
                        />
                        <p className="text-center text-4xl text-white">
                            {getText('visit site', 'visitar página')}
                        </p>
                    </div>
                </div>
            </Link>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2">
                <div
                    className="w-full flex items-center justify-center py-2 sm:py-3 md:py-4 px-4 2xl:py-8 2xl:px-8 gap-2 lg:gap-4 rounded-[32px]  bg-lightgray  hover:bg-red hover:text-light hover:cursor-pointer group transition-all duration-[250ms]"
                    onClick={() => window.open(githubURL, '_blank')}
                >
                    <Image
                        className="w-5 sm:w-6 lg:w-8 2xl:w-10 3xl:w-12 aspect-square group-hover:invert transition-all duration-[250ms]"
                        src={web}
                        alt="webpage"
                    ></Image>
                    <p className="text-2xl xl:text-3xl 2xl:text-4xl">
                        {getText('see live', 'en vivo')}
                    </p>
                </div>
                <div
                    className="w-full flex items-center justify-center py-2 sm:py-3 md:py-4 px-4 2xl:py-8 2xl:px-8 gap-2 lg:gap-4 rounded-[32px] bg-lightgray hover:bg-red hover:text-light hover:cursor-pointer group transition-all duration-[250ms]"
                    onClick={() => window.open(githubURL, '_blank')}
                >
                    <Image
                        className="w-5 sm:w-6 lg:w-8 2xl:w-10 3xl:w-12 aspect-square group-hover:invert transition-all duration-[250ms]"
                        src={github}
                        alt="github"
                    ></Image>
                    <p className="text-2xl xl:text-3xl 2xl:text-4xl">github</p>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    var { getText } = useLanguage();
    return (
        <section
            id={getText('projects', 'proyectos')}
            className="w-full flex items-center justify-center py-8 md:py-16 px-8 sm:p-16 xl:py-40 xl:px-32"
        >
            <div className="w-full h-fit text-center sm:text-start flex flex-col items-center gap-8 sm:gap-16 xl:gap-32 max-w-[1800px]">
                <h2 className="w-full font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                    {getText('projects', 'proyectos')} 💻
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                    <ProjectCard
                        pageURL={'https://apocalix.dev'}
                        githubURL={
                            'https://github.com/ApocalixDeLuque/nextjs-apocalix.dev'
                        }
                        title="portfolio"
                        preview={page2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
