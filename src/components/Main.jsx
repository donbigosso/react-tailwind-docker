export default function Main({children}) {
    return (
       <main className="min-h-screen bg-black text-amber-50 flex flex-col items-center gap-8 px-4 py-10 md:px-10">
            {children}
        </main>
    )
}