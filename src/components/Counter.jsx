import Button from './Button.jsx'
export default function Counter({ count, onIncrement, onDecrement, reset }) {
  return (
    <section className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
      <p className="text-slate-400 text-sm">Count is</p>
      <p className="mt-1 text-4xl font-semibold tabular-nums">{count}</p>
      <Button children="Increment" onClick={onIncrement}  />
      <Button children="Decrement" onClick={onDecrement} tone="rose" />
      <Button children="Reset" tone="slate" onClick={reset} />
    </section>
  )
}
