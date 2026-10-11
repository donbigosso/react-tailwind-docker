export default function SqTile({ children, bgColor = 'sky' }) {
  const bgTones = {
    slate: 'bg-slate-900',
    sky: 'bg-sky-900',
    rose: 'bg-rose-900',
  }
  return (
    <section className={`w-100 h-100 rounded-xl hover:border-4 hover:border-rose-900  md:w-50 md:h-50 ${bgTones[bgColor]} p-6 text-center`}>
      <p className="text-slate-200 text-lg">{children}</p>
    </section>
  )
}