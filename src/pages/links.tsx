import { useLanguage } from '@/components/utils/LanguageContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchFacebookUserData } from './api/meta';
import Link from 'next/link';
import {
    apocalixdeluque,
    apple_music,
    battle_net,
    discord,
    epic_games,
    facebook,
    github,
    instagram,
    linkedin,
    mail,
    meta,
    padlock,
    spotify,
    steam,
    threads,
    tiktok,
    twitch,
    twitter,
    ubisoft,
    valorant,
    youtube
} from '../../public/icons';

var access_token = process.env.NEXT_PUBLIC_META_CLIENT_TOKEN;
var app_id = process.env.NEXT_PUBLIC_META_APP_ID;
var user_id = process.env.NEXT_PUBLIC_META_USER_ID;

interface FacebookUserData {
    name: string;
    id: string;
}

const Links = () => {
    var { getText } = useLanguage();
    const [userData, setUserData] = useState<FacebookUserData | null>(null);
    const profilePictureUrl = `https://graph.facebook.com/v17.0/${user_id}/picture?type=large&access_token=${app_id}|${access_token}`;

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFacebookUserData();
            setUserData(data);
        };

        fetchData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }
    return (
        <section className="flex flex-col items-center justify-start bg-[url('/hero-pattern.png')] bg-center px-4 py-4 xs:px-16 xl:px-32 3xl:py-8 gap-3">
            <h2 className="py-16 text-4xl font-semibold md:text-5xl min-900:py-32 xl:text-6xl 2xl:text-7xl">
                {getText('all my links!', 'todos mis links!')} 🚀
            </h2>
            <div className="hidden max-w-2xl gap-3 rounded-[16px] border border-lightgray bg-light p-4">
                <div className="relative aspect-square h-40">
                    <Image
                        className="rounded-[16px]"
                        src={profilePictureUrl}
                        alt="profile picture"
                        fill
                    />
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <div>
                        <p className="text-center">{userData.name}</p>
                    </div>
                    <div className="flex justify-around">
                        <Link
                            className="w-10 transition-all duration-[250ms] hover:scale-110"
                            href={`https://www.facebook.com/the.jonathn/`}
                        >
                            <Image src={facebook} alt="facebook" />
                        </Link>
                        <Link
                            className="w-10 transition-all duration-[250ms] hover:scale-110"
                            href={`https://www.instagram.com/the.jonathn/`}
                        >
                            <Image src={instagram} alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* 
            

            
            */}
            <div className="w-full max-w-[1800px] flex gap-6 rounded-[16px] justify-around items-center border border-lightgray hover:border-gray transition-all duration-[250ms] bg-light p-4">
                <div className="flex flex-col justify-center items-center gap-3">
                    <Image className="w-20 h-20" src={meta} alt="logo" />
                    <p className="text-center">@the.jonathn</p>
                </div>
                <div className="flex flex-col min-900:flex-row gap-3 min-900:gap-6">
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.facebook.com/the.jonathn',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <Image className="w-10" src={facebook} alt="logo" />
                        <p>facebook</p>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.instagram.com/the.jonathn',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <Image className="w-10" src={instagram} alt="logo" />
                        <p>instagram</p>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.threads.net/@the.jonathn',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <Image className="w-10" src={threads} alt="threads" />
                        <p>threads</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1800px] flex gap-6 rounded-[16px] justify-around items-center border border-lightgray hover:border-gray transition-all duration-[250ms] bg-light p-4">
                <div className="flex flex-col justify-center items-center gap-3">
                    <Image className="w-20 h-20" src={twitter} alt="logo" />
                    <p className="text-center">twitters</p>
                </div>
                <div className="flex flex-col min-900:flex-row gap-3 min-900:gap-6">
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.twitter.com/apocalix_',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <div className="relative aspect-square w-10">
                            <Image
                                className="rounded-md"
                                src={profilePictureUrl}
                                alt="profile picture"
                                fill
                            />
                        </div>
                        <p>@apocalix_</p>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.twitter.com/ApocalixDeLuque',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <div className="relative aspect-square w-10">
                            <Image
                                className="rounded-md"
                                src={apocalixdeluque}
                                alt="profile picture"
                                fill
                            />
                        </div>
                        <p>@apocalixdeluque</p>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.twitter.com/just_apo',
                                'mywindow'
                            )
                        }
                        className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow border-lightgray rounded-[16px] p-2"
                    >
                        <div className="relative aspect-square w-10">
                            <Image
                                className="rounded-md"
                                src={padlock}
                                alt="profile picture"
                                fill
                            />
                        </div>
                        <p>@just_apo</p>
                    </div>
                </div>
            </div>
            {/* 
            

                        

            
            */}
            <div className="flex flex-wrap gap-3 justify-center items-center h-fit w-fit">
                <div
                    onClick={() =>
                        window.open(
                            'https://www.twitch.tv/apocalixdeluque',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={twitch}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>twitch</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://www.youtube.com/@apocalixdeluque8578',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={youtube}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>youtube</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://open.spotify.com/user/cnoa3xwcu59hsbxbsrtujlg65',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={spotify}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>spotify</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://music.apple.com/profile/thejonathn',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={apple_music}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>apple music</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://discord.com/users/441795026956320778',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={discord}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>discord</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://github.com/ApocalixDeLuque',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={github}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>github</p>
                </div>
                <div
                    onClick={() =>
                        window.open('https://apocalix.dev/valorant', 'mywindow')
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={valorant}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>valorant</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://steamcommunity.com/id/ApoccalixDeLuque/',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={steam}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>steam</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://linkedin.com/in/apocalix',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={linkedin}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>linkedin</p>
                </div>
                <div
                    onClick={() =>
                        window.open('mailto:me@apocalix.dev', 'mywindow')
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={mail}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>mail</p>
                </div>
                <div
                    onClick={() =>
                        window.open(
                            'https://www.tiktok.com/@the.jonathn',
                            'mywindow'
                        )
                    }
                    className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2"
                >
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={tiktok}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>tiktok</p>
                </div>
                <div className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2">
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={ubisoft}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>ApocalixDeLuque</p>
                </div>
                <div className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2">
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={epic_games}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>ApocalixDeLuque</p>
                </div>
                <div className="flex items-center gap-3 transition-all duration-[250ms] hover:scale-110 hover:cursor-pointer border shadow bg-white border-lightgray rounded-[16px] p-2">
                    <div className="relative aspect-square w-10">
                        <Image
                            className="rounded-md"
                            src={battle_net}
                            alt="profile picture"
                            fill
                        />
                    </div>
                    <p>Apocalix#11419</p>
                </div>
            </div>
        </section>
    );
};

export default Links;
