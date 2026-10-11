export default function ResizingComponent() {
  return (
    <div className="group w-full rounded-lg bg-slate-800 p-4">
        <p className="pb-2">This is a resizing component</p>
      {/* <div className="rounded-lg bg-sky-500 p-6 opacity-0 transition-opacity group-hover:opacity-100 duration-1000"> */}
        <div className="rounded-lg bg-sky-500 p-6 w-50  transition-[width] duration-1000 group-hover:w-100">
        I will resize 
        </div>
      {/* </div> */}
    </div>
  )
}