

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight">
          <span className="text-slate-100">Pol</span><span className="text-red-600">Afri</span>
        </a>

      </div>
    </header>
  )
}