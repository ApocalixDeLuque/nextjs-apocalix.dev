import moon from "../../public/icons/moon.png";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-center bg-dark gap-32 py-40'>
        <Link className='flex flex-row gap-4' href="/"> 
            <Image className='invert w-12' src={moon} alt='logo'></Image>
            <p className="text-5xl font-semibold text-light">apocalix.dev</p>
        </Link>
        <div className='flex gap-24'>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">go to</h2>
                <Link href="/home">
                    <p className="hover:text-red transition-all hover:cursor-pointer">home</p>
                </Link>
                <p className="hover:text-red transition-all hover:cursor-pointer">projects</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">about me</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">contact</p>
            </nav>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">contact</h2>
                <p className="hover:text-red transition-all hover:cursor-pointer">email</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">linkedin</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">github</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">whatsapp</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">discord</p>
            </nav>
            <nav className='flex flex-col text-3xl font-thin text-light gap-4'>
                <h2 className="text-5xl font-semibold text-light pb-4">other</h2>
                <p className="hover:text-red transition-all hover:cursor-pointer">socials</p>
                <p className="hover:text-red transition-all hover:cursor-pointer">geek stuff</p>
            </nav>
        </div>
    </footer>
  )
}

export default Footer