import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export function MainLayout({children} : { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}
