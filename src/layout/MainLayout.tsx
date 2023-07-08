
export function MainLayout({children} : { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col min-h-screen`}>
        header
        <main>
            {children}
        </main>
        footer
    </div>
  )
}
