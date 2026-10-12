import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import Tile from './components/Tile.jsx'
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import FadingComponent from './components/FadingComponent.jsx'
import ResizingComponent from './components/ResizingComponent.jsx'
import SqTile from './components/SqTile.jsx'
import SectionNoFlex from './components/SectionNoFlex.jsx'

import SlidingComponent2 from './components/SlidingComponent2.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Header />
    <Main>
      <section id="home" className="w-full max-w-3xl text-center">
        <h1 className="text-amber-400 text-4xl font-semibold"><span className="text-slate-100">Pol</span><span className="text-red-600">Afri</span></h1>
        <p className="mt-4 text-slate-400">Polska w Gambii, Gambia w Polsce</p>
      </section>

      <section id="about" className="w-full max-w-3xl">
        <h2 className="text-amber-400 text-2xl font-semibold">O nas</h2>
        <p className="mt-3 text-slate-300">Krótki opis założycieli.</p>
      </section>

      <section id="contact" className="w-full max-w-3xl">
        <h2 className="text-amber-400text-2xl font-semibold">Kontakt</h2>
        <p className="mt-3 text-slate-300">polafri@gmail.com</p>
      </section>
    </Main>
  </div>
)
}