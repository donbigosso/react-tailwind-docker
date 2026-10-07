import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Docker + React + Tailwind</h1>
        <p className="text-slate-400">Count is {count}</p>
        <button
          className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium"
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
      </div>
    </main>
  )
}