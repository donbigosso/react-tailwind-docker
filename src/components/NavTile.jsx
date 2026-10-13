
export default function NavTile({ href, title, children }) {
  return (
    <a
      href={href}
      className="block w-full rounded-xl border border-amber-900/40 bg-amber-950/30 p-6 text-center hover:border-amber-500 hover:bg-amber-950/50 transition-colors"
    >
      <h3 className="text-xl font-semibold text-amber-400">{title}</h3>
  
      {children && <p className="mt-2 text-amber-50/80 text-sm">{children}</p>}
      
    </a>
  )
}