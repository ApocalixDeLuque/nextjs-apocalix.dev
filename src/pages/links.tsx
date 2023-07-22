
import { useLanguage } from "@/components/utils/LanguageContext"
import Image from "next/image"
import { useEffect, useState } from "react"
import { fetchFacebookUserData } from './api/meta'
import Link from "next/link"

var access_token = process.env.NEXT_PUBLIC_META_CLIENT_TOKEN
var app_id = process.env.NEXT_PUBLIC_META_APP_ID
var user_id = process.env.NEXT_PUBLIC_META_USER_ID

interface FacebookUserData {
    name: string
    id: string
}

const Links = () => {
    var { getText } = useLanguage()
    const [userData, setUserData] = useState<FacebookUserData | null>(null)
    const profilePictureUrl = `https://graph.facebook.com/v17.0/${user_id}/picture?type=large&access_token=${app_id}|${access_token}`
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFacebookUserData()
            setUserData(data)
        }
    
        fetchData()
    }, [])

    if (!userData) {
        return <div>Loading...</div>
    }
    return (
        <section className="flex flex-col justify-start items-center h-screen py-4 px-4 xs:px-16 xl:px-32 3xl:py-8 bg-[url('/hero-pattern.png')] bg-center ">
            <h2 className='font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl py-16 min-900:py-32'>{getText("social media","redes sociales")} 🚀</h2>
            <Link href={`https://www.facebook.com/profile.php?id=${user_id}`} className=' flex flex-col gap-3 max-w-2xl border rounded-[16px] border-lightgray p-4 bg-light hover:scale-110 transition-all duration-[250ms]'>
                <div className="h-40 aspect-square relative">
                    <Image className="rounded-[16px]" src={profilePictureUrl} alt="profile picture" fill />
                </div>
                <div>
                    <p className="text-center">{userData.name}</p>
                </div>
            </Link>
        </section>
    )
}

export default Links