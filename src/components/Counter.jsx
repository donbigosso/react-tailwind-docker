export default function Counter({ count, onIncrement }) {
  return (
    <section className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
      <p className="text-slate-400 text-sm">Count is</p>
      <p className="mt-1 text-4xl font-semibold tabular-nums">{count}</p>
      <button
        className="mt-6 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium"
        onClick={onIncrement}
      >
        Increment
      </button>
    </section>
  )
}
