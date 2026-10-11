export default function SlidingComponent2() {
  return (
    <div className="group w-full overflow-hidden rounded-lg bg-slate-800 p-4">
      <p className="pb-2">This is a sliding component</p>
      <div className="-translate-x-full rounded-lg bg-sky-500 p-6 transition-transform duration-700 ease-out group-hover:translate-x-0">
        I slide in from the left
      </div>
    </div>
  )
}