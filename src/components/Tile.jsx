export default function Tile({ children, bgColor = 'sky' }) {
  const bgTones = {
    slate: 'bg-slate-900',
    sky: 'bg-sky-900',
    rose: 'bg-rose-900',
  }
  return (
    <section className={`w-full rounded-xl border border-slate-800 ${bgTones[bgColor]} p-6 text-center`}>
      <p className="text-slate-200 text-lg">{children}</p>
    </section>
  )
}