import { useLanguage } from '@/components/utils/LanguageContext';

const Links = () => {
    var { getText } = useLanguage();
    return (
        <section className="flex flex-col justify-start items-center h-screen py-4 px-4 xs:px-16 xl:px-32 3xl:py-8 bg-[url('/hero-pattern.png')] bg-center ">
            <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl py-16 min-900:py-32">
                {getText('my music', 'mi música')} 💫
            </h2>
            {/* TODO: integrate last.fm API to show all kinds of music stats */}
            <div>
                <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl pb-24">
                    {getText('coming soon', 'próximamente')}...
                </p>
            </div>
        </section>
    );
};

export default Links;
