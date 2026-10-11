export default function Main({children}) {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-10">
            {children}
        </main>
    )
}