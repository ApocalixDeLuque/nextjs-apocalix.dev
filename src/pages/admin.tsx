import { useLanguage } from "@/components/utils/LanguageContext"

const Admin = () => {
    var { getText } = useLanguage()
    const asd = () => {
        return null
    }
    
  return (
    <section className="flex flex-col justify-start items-center h-screen py-4 px-4 xs:px-16 xl:px-32 3xl:py-8 bg-[url('/hero-pattern.png')] bg-center ">
        <h2 className='font-semibold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl py-16 min-900:py-32'>admin login 🦾</h2>
                    {/* TODO: add form functionallity */}
        <form onSubmit={asd} className='w-full flex flex-col gap-3 select-none max-w-2xl border rounded-[16px] border-lightgray p-4 bg-light'>
            <p className="text-center text-2xl">{getText("forbidden","prohibido")} 🚫</p>
            <div className='flex flex-col gap-3'>
                <input className='bg-lightgray rounded-[16px] text-dark p-3' placeholder={getText("user","usuario")} name='user' required />
                <input type="password" className='bg-lightgray rounded-[16px] text-dark p-3' placeholder={getText("password","contraseña")} name='password' required />
            </div>
            <div className='flex self-end justify-between'>
                <button type="submit" className='flex py-3 px-6 bg-red rounded-[16px] gap-2 hover:bg-green transition-all duration-[250ms] group hover:cursor-pointer'>
                    <p className='text-light group-hover:text-light transition-all duration-[250ms]'>
                    {getText("let me in!","¡déjame entrar!")}
                    </p>
                </button>
            </div>
        </form>
    </section>
  )
}

export default Admin
