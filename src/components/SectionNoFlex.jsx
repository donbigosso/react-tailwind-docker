export default function SectionNoFlex({ children }) {
  return (
    <div className="flex flex-wrap gap-4 bg-slate-800 p-4 rounded-lg w-full">
      {children}
    </div>
  )
}