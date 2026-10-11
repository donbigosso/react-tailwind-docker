export default function SectionLgColMdRow({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row bg-slate-800 p-4 rounded-lg w-full">
      {children}
    </div>
  )
}