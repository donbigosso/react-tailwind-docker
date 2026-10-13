import { useState } from 'react'
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import Tile from './components/Tile.jsx'
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import NavTile from './components/NavTile.jsx'
import ImageTile from './components/ImageTile.jsx'
import Carousel from './components/Carousel.jsx'
import {MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/outline'
import bannerPhoto1 from './images/banner/szkola.jpg'
import bannerPhoto2 from './images/banner/tescie.jpg'
import bannerPhoto3 from './images/banner/wisla.jpg'
import IconTile from './components/IconTile.jsx'
import { getRandomBannerPhotos } from './data/bannerPhotos.js'



export default function App() {
  const [count, setCount] = useState(0)
  const [slides] = useState(() => getRandomBannerPhotos(5))
  return (
  <div>
    <Header />
    <Main>
      <section id="home" className="w-full max-w-3xl text-center">
        <h1 className="text-amber-400 text-4xl font-semibold"><span className="text-slate-100">Pol</span><span className="text-red-600">Afri</span></h1>
        <p className="mt-4 text-slate-400">Polska w Gambii, Gambia w Polsce</p>
      </section>
      <Carousel images={slides} />
  <section id="tileSection" className="w-full max-w-4xl">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <NavTile href="#about" title="O nas">
      Kim jesteśmy
    </NavTile>
    <NavTile href="#contact" title="Kontakt">
      Napisz do nas
    </NavTile>
     <IconTile href="#contact" title="Kontakt" Icon={EnvelopeIcon}>
      Napisz do nas na polafri@gmailcom
    </IconTile>
    <ImageTile  title="Blah blah" src="https://donbigosso.polafri.pl/backend/media_items/media_item_bigos_563.jpg" >
    Test cegiełki
    </ImageTile>
  </div>
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