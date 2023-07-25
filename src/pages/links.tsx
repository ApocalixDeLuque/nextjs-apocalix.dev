import { useLanguage } from '@/components/utils/LanguageContext';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchFacebookUserData } from './api/meta';
import Link from 'next/link';
import { facebook, instagram, threads } from '../../public/icons';

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
        <section className="flex h-screen flex-col items-center justify-start bg-[url('/hero-pattern.png')] bg-center px-4 py-4 xs:px-16 xl:px-32 3xl:py-8 ">
            <h2 className="py-16 text-4xl font-semibold md:text-5xl min-900:py-32 xl:text-6xl 2xl:text-7xl">
                {getText('social media', 'redes sociales')} 🚀
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
                            {' '}
                            <Image src={facebook} alt="facebook" />
                        </Link>
                        <Link
                            className="w-10 transition-all duration-[250ms] hover:scale-110"
                            href={`https://www.instagram.com/the.jonathn/`}
                        >
                            {' '}
                            <Image src={instagram} alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex max-w-2xl gap-3 rounded-[16px] border border-lightgray bg-light p-4">
                <Link
                    className="w-10 transition-all duration-[250ms] hover:scale-110"
                    href={`https://www.facebook.com/the.jonathn`}
                >
                    {' '}
                    <Image src={facebook} alt="facebook" />
                </Link>
                <Link
                    className="w-10 transition-all duration-[250ms] hover:scale-110"
                    href={`https://www.instagram.com/the.jonathn`}
                >
                    {' '}
                    <Image src={instagram} alt="instagram" />
                </Link>
                <Link
                    className="w-10 transition-all duration-[250ms] hover:scale-110"
                    href={`https://www.threads.net/@the.jonathn`}
                >
                    {' '}
                    <Image src={threads} alt="threds" />
                </Link>
                twitter threads twitch youtube spotify apple music discord
                valorant league of legends overwatch steam riot games battle.net
                epic games uplay
            </div>
        </section>
    );
};

export default Links;
