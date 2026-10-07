const tones = {
  sky: "bg-sky-500 hover:bg-sky-400 text-slate-950",
  slate: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700",
  rose: "bg-rose-500 hover:bg-rose-400 text-slate-950",
}

export default function Button({ children, onClick, tone = "sky" }) {
  return (
    <button
    //  className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium"
    className={`mt-6 px-4 py-2 rounded-md mx-2 ${tones[tone]} font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}