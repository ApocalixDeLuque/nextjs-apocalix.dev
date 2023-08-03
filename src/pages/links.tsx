import { useLanguage } from '@/components/utils/LanguageContext';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { fetchFacebookUserData } from './api/meta';
import {
    amazon,
    apocalixdeluque,
    apocalixtv,
    apple_music,
    battle_net,
    catmedia,
    catmusic,
    discord,
    dogdiscord,
    epic_games,
    facebook,
    github,
    instagram,
    jiji,
    lastfm,
    linkedin,
    load,
    mail,
    meta,
    paypal,
    pinterest,
    reddit,
    spotify,
    steam,
    threads,
    tiktok,
    twitch,
    twitter,
    ubisoft,
    valorant,
    yoshi,
    youtube
} from '../../public/icons';
import CustomTooltip from '@/components/utils/CustomTooltip';
import PageHero from '@/components/PageHero';

type UserDataProps = {
    name: string;
    id: string;
    profilePictureUrl: StaticImageData;
};

type LinkItemProps = {
    src: StaticImageData;
    title: string;
    link: string;
};

type LinkCopyItemProps = {
    src: StaticImageData;
    textToCopy: string;
};

type LinkSectionProps = {
    src?: StaticImageData;
    title: string;
    children: React.ReactNode;
    hideImage?: boolean;
};

//prettier-ignore
const LinkSection = ({ src=load, title = '', children, hideImage = false }: LinkSectionProps) => {
    return (
        <div className="w-full max-w-[1800px] flex gap-6 rounded-[16px] justify-between items-center border border-lightgray hover:border-gray transition-all duration-[250ms] bg-light p-4">
            <div className="flex flex-col justify-center items-center gap-3 w-[30%] min-w-fit">
                {!hideImage && (<Image className="w-16 h-16 sm:w-20 sm:h-20 rounded-md" src={src} alt="logo" />)}
                <p className="text-sm sm:text-base text-center">{title}</p>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row gap-3 md:gap-6 w-full justify-center">
                {children}
            </div>
        </div>
    );
};

//prettier-ignore
const LinkItem = ({ src = load, title = '', link = '' }: LinkItemProps) => {
    return (
        <div
            onClick={() => window.open(link, 'mywindow')}
            className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
        >
            <div className='w-[20%] min-w-fit flex justify-center'>
                <Image width={30} height={30} className="rounded-md min-w-[30px] min-400:min-w-[35px] xs:min-w-[40px]" src={src} alt="icon"/>
            </div>
            <p className='text-sm sm:text-base w-[80%] flex justify-center'>{title}</p>
        </div>
    );
};

//prettier-ignore
const LinkCopyItem = ({ src = load, textToCopy = '' }: LinkCopyItemProps) => {
    var { getText } = useLanguage();
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess('✅');
        } catch (err) {
            setCopySuccess('❌');
        }
        setTimeout(() => setCopySuccess(''), 1000);
    };

    return (
        <CustomTooltip followCursor title={<p>{getText('copy to clipboard', 'copiar al portapapeles')}</p>}>
            <div className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2">
                <div className='w-[20%] min-w-fit flex justify-center'>
                    <Image width={30} height={30} className="rounded-md min-w-[30px] min-400:min-w-[35px] xs:min-w-[40px]" src={src} alt="icon"/>
                </div>
                <p
                    className="text-sm sm:text-base w-[80%] flex justify-center text-dark hover:text-red min-w-fit transition-all duration-[250ms] hover:cursor-pointer select-none text-start"
                    onClick={copyToClipboard}
                >
                    {copySuccess ? copySuccess : `${textToCopy} 📋`}
                </p>
            </div>
        </CustomTooltip>
    );
};

const Links = () => {
    var { getText } = useLanguage();
    const [userData, setUserData] = useState<UserDataProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFacebookUserData();
            setUserData(data);
        };
        fetchData();
    }, []);

    return (
        <PageHero title={getText('all my links! 🚀', 'todos mis links! 🚀')}>
            <LinkSection src={meta} title="@the.jonathn">
                <LinkItem
                    link="https://www.facebook.com/the.jonathn"
                    src={facebook}
                    title="facebook"
                />
                <LinkItem
                    link="https://www.instagram.com/the.jonathn"
                    src={instagram}
                    title="instagram"
                />
                <LinkItem
                    link="https://www.threads.net/@the.jonathn"
                    src={threads}
                    title="threads"
                />
            </LinkSection>

            <LinkSection src={twitter} title="twitters">
                {userData ? (
                    <LinkItem
                        link="https://www.twitter.com/apocalix_"
                        src={userData.profilePictureUrl}
                        title="@apocalix_"
                    />
                ) : (
                    <LinkItem
                        link="https://www.twitter.com/apocalix_"
                        src={apocalixtv}
                        title="@apocalix_"
                    />
                )}
                <LinkItem
                    link="https://www.twitter.com/ApocalixDeLuque"
                    src={apocalixdeluque}
                    title="@apocalixdeluque"
                />
                <LinkItem
                    link="https://www.twitter.com/thoughtful_apo"
                    src={jiji}
                    title="@thoughtful_apo"
                />
            </LinkSection>

            <LinkSection src={dogdiscord} title="discord">
                <LinkItem
                    link="https://discord.com/users/441795026956320778"
                    src={discord}
                    title={getText('profile', 'perfil')}
                />

                <LinkItem
                    link="https://discord.gg/qSuKaZvZRR"
                    src={apocalixtv}
                    title={getText('server', 'servidor')}
                />
            </LinkSection>

            <LinkSection
                src={catmusic}
                title={`${getText('music', 'música')} <3`}
            >
                <LinkItem
                    link="https://www.last.fm/user/ApocalixDeLuque"
                    src={lastfm}
                    title="last.fm"
                />
                <LinkItem
                    link="https://music.apple.com/profile/thejonathn"
                    src={apple_music}
                    title="apple music"
                />
                <LinkItem
                    link="https://open.spotify.com/user/cnoa3xwcu59hsbxbsrtujlg65"
                    src={spotify}
                    title="spotify"
                />
            </LinkSection>

            <LinkSection src={catmedia} title="media">
                <LinkItem
                    link="https://www.twitch.tv/apocalixdeluque"
                    src={twitch}
                    title="twitch"
                />
                <LinkItem
                    link="https://www.youtube.com/@apocalixdeluque8578"
                    src={youtube}
                    title="youtube"
                />
                <LinkItem
                    link="https://www.tiktok.com/@apocalixdeluque_"
                    src={tiktok}
                    title="tiktok"
                />
            </LinkSection>

            <LinkSection src={yoshi} title="gaming">
                <LinkItem
                    link="https://steamcommunity.com/id/ApoccalixDeLuque/"
                    src={steam}
                    title="steam"
                />
                <LinkItem
                    link="https://apocalix.dev/valorant"
                    src={valorant}
                    title="valorant"
                />
                <p className="text-center md:hidden">click to copy:</p>
                <LinkCopyItem src={steam} textToCopy="491933584" />
                <LinkCopyItem src={ubisoft} textToCopy="ApocalixDeLuque" />
                <LinkCopyItem src={epic_games} textToCopy="ApocalixDeLuque" />
                <LinkCopyItem src={battle_net} textToCopy="Apocalix#11419" />
            </LinkSection>
            {/* 



            */}
            <LinkSection title={getText('other', 'otros')} hideImage>
                <LinkItem
                    link="https://github.com/ApocalixDeLuque"
                    src={github}
                    title="github"
                />
                <LinkItem
                    link="https://linkedin.com/in/apocalix"
                    src={linkedin}
                    title="linkedin"
                />
                <LinkItem
                    link="mailto:contact@apocalix.dev"
                    src={mail}
                    title="email"
                />
                <LinkItem
                    link="https://reddit.com/u/ApocalixDeLuque"
                    src={reddit}
                    title="reddit"
                />
                <LinkItem
                    link="https://pin.it/2SP66lq"
                    src={pinterest}
                    title="pinterest"
                />
                <LinkItem
                    link="https://paypal.me/apocalixdeluque"
                    src={paypal}
                    title="paypal"
                />
                <LinkItem
                    link="https://www.amazon.com.mx/hz/wishlist/ls/1VFO76DX5FY9Z?ref_=list_d_wl_lfu_nav_8"
                    src={amazon}
                    title="wishlist"
                />
            </LinkSection>
        </PageHero>
    );
};

export default Links;
