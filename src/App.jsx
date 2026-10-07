import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import Tile from './components/Tile.jsx'
export default function App() {
  const [count, setCount] = useState(0)

  return (
   <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-10">

  {/* Row 1 */}
  <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
    <div className="max-w-sm text-center md:text-left">
      <h1 className="text-3xl font-semibold lg:text-5xl">Docker + React + Tailwind</h1>
      <p className="mt-3 text-slate-400 text-sm md:text-base">
        Narrow window: stacked. Wide window: side by side.
      </p>
    </div>
    <Counter count={count} onIncrement={() => setCount(c => c + 1)} reset={() => setCount(0)} onDecrement={() => setCount(c => c - 1)} />
  </div>

  {/* Row 2 */}
  <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
    <Tile>Tile Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Tile>
    <Tile>Another Tile</Tile>
  </div>
  {/* Row 3 */}
<div className="w-full bg-slate-800 p-4 rounded-lg">
  Spans the entire screen width, ignoring parents
  <div className="w-full bg-slate-800 p-4 rounded-lg overflow-hidden group">
  <div className="translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-0 bg-blue-500 p-6 rounded-lg">
    I slide in when you hover the parent
  </div>
</div>
</div>

</main>

  )
}