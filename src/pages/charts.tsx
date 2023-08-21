import { useLanguage } from '@/components/utils/LanguageContext';
import { LastFmData } from '@/components/LastFmData';

const Links = () => {
    var { getText } = useLanguage();
    const userName = process.env.NEXT_PUBLIC_LASTFM_USERNAME || '';
    const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY || '';
    return (
        <section className="flex flex-col justify-start items-center h-screen py-4 px-4 xs:px-16 xl:px-32 3xl:py-8 bg-[url('/hero-pattern.png')] bg-center ">
            <h2 className="font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl py-16 min-900:py-32">{getText('my music', 'mi música')} 💫</h2>
            {/* TODO: integrate last.fm API to show all kinds of music stats */}
            <div className="flex flex-col justify-center">
                <LastFmData userName={userName} apiKey={apiKey} />
            </div>
        </section>
    );
};

export default Links;
