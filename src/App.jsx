import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import Tile from './components/Tile.jsx'
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import FadingComponent from './components/FadingComponent.jsx'

import SlidingComponent2 from './components/SlidingComponent2.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
   <Main>
  {/* Row 1 */}
  <SectionLgColMdRow>
    <div className="max-w-sm text-center md:text-left">
      <h1 className="text-3xl font-semibold lg:text-5xl">Docker + React + Tailwind</h1>
      <p className="mt-3 text-slate-400 text-sm md:text-base">
        Narrow window: stacked. Wide window: side by side.
      </p>
    </div>
    <Counter count={count} onIncrement={() => setCount(c => c + 1)} reset={() => setCount(0)} onDecrement={() => setCount(c => c - 1)} />
  </SectionLgColMdRow>


  <SectionLgColMdRow>
    <Tile>Tile Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Tile>
    <Tile>Another Tile</Tile>
  </SectionLgColMdRow>
<SectionLgColMdRow>
  <p>Paragraph content</p>
</SectionLgColMdRow>

<SectionLgColMdRow>
  <SlidingComponent2 />
</SectionLgColMdRow>
<SectionLgColMdRow>
  <FadingComponent />
</SectionLgColMdRow>

</Main>
</div>

  )
}