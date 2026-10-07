import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-8 px-4 py-10 md:flex-row md:px-10">
      <div className="max-w-sm text-center md:text-left">
        <h1 className="text-3xl font-semibold lg:text-5xl">Docker + React + Tailwind</h1>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Narrow window: stacked. Wide window: side by side.
        </p>
      </div>
      <Counter count={count} onIncrement={() => setCount(c => c + 1)} reset={() => setCount(0)} onDecrement={() => setCount(c => c - 1)} />
    </main>

  )
}