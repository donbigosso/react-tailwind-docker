import { useState, useEffect } from 'react'

import Button from './components/Button.jsx'
import Tile from './components/Tile.jsx'
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import NavTile from './components/NavTile.jsx'
import ImageTile from './components/ImageTile.jsx'
import Carousel from './components/Carousel.jsx'
import {MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/outline'
import IconTile from './components/IconTile.jsx'
import { getRandomBannerPhotos } from './data/bannerPhotos.js'
import Paragraph from './components/Paragraph.jsx'
import ImageModal from './components/ImageModal.jsx'
import ImageMiniature from './components/ImageMiniature.jsx'
import aboutMiniature from './images/for_content/about_01_sm.jpg'
import A from './components/A.jsx'
import { getContent, displayParagraph } from './data/contentFunctions.js'




export default function App() {
  const [count, setCount] = useState(0)
  const [slides] = useState(() => getRandomBannerPhotos(5))
  const [isImageModalOpen, setisImageModalOpen] = useState(false)
  const [imgModalSrc, setimgModalSrc] = useState(null)
  const [modalCaption, setModalCaption] = useState('Brak podpisu')
  const [content, setContent] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await getContent()
      setContent(data)
    }
    load()
  }, [])   // empty array = run only once after first render
 
  return (
  <div>
    <div id="home" className="h-0 w-0"></div>
    <Header />
    <Main >
      <section  className="w-full max-w-3xl text-center">
        <h1  className="text-amber-400 text-4xl font-semibold"><span className="text-slate-100">Pol</span><span className="text-red-600">Afri</span></h1>
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
        <Paragraph>
          <ImageMiniature src={aboutMiniature} alt="O nas" setisImageModalOpen={setisImageModalOpen} 
          setimgModalSrc={setimgModalSrc} setModalCaption={setModalCaption} modalCaption="Rodzinka PolAfri" />
          {displayParagraph(content, "001_about_01")}
        </Paragraph>
        <Paragraph>
          Obecnie PolAfri to projekt promujący Gambię w Polsce i Polskę w Gambii za pośrednictwem naszej rodzinki. 
          Jesteśmy aktywni na różnych social mediach (głównie <A href="https://youtube.com/playlist?list=PLNmoIXBH0S1EzYBc3xu5RYIrDCOpcBwII&si=KHBUW6kgXPJVtMuL"  newWindow={true}>YouTube</A>), a od czasu do czasu Wojtek prowadzi wycieczki 
          po Afryce (organizowane przez siebie lub inne biura podróży). Wojtek (zwany też Bigosem) jest również 
          założycielem i administratorem piwrwszej i największej grupy facebookowej “<A href="https://www.facebook.com/groups/polacywgambii" newWindow={true}>Polacy w Gambii</A>”.
        </Paragraph>
      </section>

      <section id="contact" className="w-full max-w-3xl">
        <h2 className="text-amber-400text-2xl font-semibold">Kontakt</h2>
        <p className="mt-3 text-slate-300">polafri@gmail.com</p>
      </section>
    </Main>

    <ImageModal
      isOpen={isImageModalOpen}
          onClose={() => setisImageModalOpen(false)}
          src={imgModalSrc}
          alt="Obrazek PolAfri"
      caption={modalCaption}
    />
  </div>
)
  
}