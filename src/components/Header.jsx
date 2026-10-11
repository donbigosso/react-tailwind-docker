const links = [
  { href: "#home", label: "Home" },
  { href: "#counter", label: "Counter" },
  { href: "#notes", label: "Notes" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight">
          Lesson
        </a>
        <nav className="flex gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-100">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}