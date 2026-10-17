import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Button from './components/Button.jsx';
import Tile from './components/Tile.jsx';
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import NavTile from './components/NavTile.jsx';
import ImageTile from './components/ImageTile.jsx';
import Carousel from './components/Carousel.jsx';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import IconTile from './components/IconTile.jsx';
import { getRandomBannerPhotos } from './data/bannerPhotos.js';
import Paragraph from './components/Paragraph.jsx';
import ImageModal from './components/ImageModal.jsx';
import ImageMiniature from './components/ImageMiniature.jsx';
import aboutMiniature from './images/for_content/about_01_sm.jpg';
import A from './components/A.jsx';
import ContactForm from './components/Web3ContactForm.jsx';
import flagImage from './images/tiles/flag_sm.png';
import {
  getContent,
  displayParagraph,
  displayHeader,
  displaySubheading,
} from './data/contentFunctions.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [slides] = useState(() => getRandomBannerPhotos(5));
  const [isImageModalOpen, setisImageModalOpen] = useState(false);
  const [imgModalSrc, setimgModalSrc] = useState(null);
  const [modalCaption, setModalCaption] = useState('Brak podpisu');
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getContent();
      setContent(data);
    }
    load();
  }, []); // empty array = run only once after first render

  return (
    <div>
      <div id="home" className="h-0 w-0"></div>
      <Header />
      <Main>
        <section className="w-full max-w-3xl text-center">
          <h1 className="text-amber-400 text-4xl font-semibold">
            <span className="text-slate-100">Pol</span>
            <span className="text-red-600">Afri</span>
          </h1>
          <p className="mt-4 text-slate-400">
            {displayHeader(content, '001_headline')}
          </p>
        </section>
        <Carousel images={slides} />
        <section id="tileSection" className="w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ImageTile
              href="#about"
              title={displayHeader(content, '002_about')}
              src={logo}
            >
              {displaySubheading(content, '001_who_are_we')}
            </ImageTile>
            <ImageTile title="O Gambii" href="#aboutGambia" src={flagImage}>
              Informacje o kraju
            </ImageTile>
            <IconTile href="#contact" title="Kontakt" Icon={EnvelopeIcon} />
          </div>
        </section>

        <section id="about" className="w-full max-w-3xl">
          <h2 className="text-amber-400 text-2xl font-semibold">O nas</h2>
          <Paragraph>
            <ImageMiniature
              src={aboutMiniature}
              alt="O nas"
              setisImageModalOpen={setisImageModalOpen}
              setimgModalSrc={setimgModalSrc}
              setModalCaption={setModalCaption}
              modalCaption="Rodzinka PolAfri"
            />
            {displayParagraph(content, '001_about_01')}
          </Paragraph>
          <Paragraph>
            {displayParagraph(content, '002_about_02_01')}
            <A
              href="https://youtube.com/playlist?list=PLNmoIXBH0S1EzYBc3xu5RYIrDCOpcBwII&si=KHBUW6kgXPJVtMuL"
              newWindow={true}
            >
              YouTube
            </A>
            {displayParagraph(content, '003_about_02_02')}
            <A
              href="https://www.facebook.com/groups/polacywgambii"
              newWindow={true}
            >
              Polacy w Gambii
            </A>
            ”.
          </Paragraph>
        </section>
        <section id="aboutGambia" className="w-full max-w-3xl">
          <h2 className="text-amber-400 text-2xl font-semibold">
            {displayHeader(content, '004_about_gambia')}
          </h2>
          <Paragraph>
            {displayParagraph(content, '006_about_gambia_01')}
          </Paragraph>
        </section>

        <section id="contact" className="w-full max-w-3xl">
          <h2 className="text-amber-400 text-2xl font-semibold">
            {displayHeader(content, '003_contact')}
          </h2>
          <p className="mt-3 text-slate-300">
            {displayParagraph(content, '004_fill_form')}
          </p>
          <ContactForm />
          <p className="mt-3 text-slate-300">
            {displayParagraph(content, '005_email_info')}
          </p>
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
  );
}
