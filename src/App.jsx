import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Button from './components/Button.jsx';
import Tile from './components/Tile.jsx';
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Carousel from './components/Carousel.jsx';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { getRandomBannerPhotos } from './data/bannerPhotos.js';
import Paragraph from './components/Paragraph.jsx';
import ImageModal from './components/ImageModal.jsx';
import ImageMiniature from './components/ImageMiniature.jsx';
import aboutMiniature from './images/for_content/about_01_sm.jpg';
import A from './components/A.jsx';
import H2 from './components/H2.jsx';
import H3 from './components/H3.jsx';
import Section from './components/Section.jsx';
import ContactForm from './components/Web3ContactForm.jsx';
import flagImage from './images/tiles/flag_sm.png';
import NewIconTile from './components/NewIconTile.jsx';
import NewImageTile from './components/NewImageTile.jsx';
import ColumnGrid from './components/ColumnGrid.jsx';
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
          <ColumnGrid>
            <NewImageTile
              href="#about"
              title={displayHeader(content, '002_about')}
              src={logo}
            />

            <NewImageTile
              title="O Gambii"
              href="#aboutGambia"
              src={flagImage}
            />
            <NewIconTile href="#contact" title="Kontakt" Icon={EnvelopeIcon} />
          </ColumnGrid>
        </section>

        <Section id="about">
          <H2>O nas</H2>
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
        </Section>
        <Section id="aboutGambia">
          <H2>{displayHeader(content, '004_about_gambia')}</H2>
          <H3>{displayHeader(content, '005_basic_info')}</H3>
          <Paragraph>
            {displayParagraph(content, '006_about_gambia_01')}
          </Paragraph>
          <Paragraph>
            {displayParagraph(content, '007_about_gambia_02')}
          </Paragraph>
          <H3 id="history">Historia</H3>
          <Paragraph>
            Pomimo że Gambia to stosunkowo młode państwo, które uzyskało
            niepodległość od Wielkiej Brytanii w 1965 roku, historia tego kraju
            sięga znacznie dalej niż czasy kolonialne. Oprócz śladów osadnictwa
            sprzed kilku tysięcy lat w postaci glinianych naczyń i prymitywnych
            narzędzi zachowały się tu robiące wrażenie starożytne kamienne kręgi
            (m.in. w Wassu), datowane szeroko na okres od ok. III w. p.n.e. do
            XVI w. n.e.
          </Paragraph>
          <Paragraph>
            Pierwszym wielkim państwem, w skład którego wchodziło terytorium
            dzisiejszej Gambii, było Imperium Ghany. W XI w. do regionu zaczął
            docierać Islam. W kolejnych latach tereny Gambii przechodziły z rąk
            do rąk, aż do momentu, kiedy w XV w. dotarli tu pierwsi Europejczycy
            - Portugalczycy. To Brytyjczycy przejęli jednak i rozbudowali Fort
            James (dziś Kunta Kinteh Island), który odegrał ważną rolę w handlu
            niewolnikami. Ten tragiczny okres w historii Gambii został
            przedstawiony w słynnej powieści (i serialu) Alex Haley'a -
            Korzenie. W 1816 roku Brytyjczycy założyli miasto Bathurst - obecny
            Banjul - stolicę dzisiejszej Gambii. Kraj pozostawał pod brytyjską
            dominacją aż do roku 1965.
          </Paragraph>
        </Section>

        <Section id="contact">
          <H2>{displayHeader(content, '003_contact')}</H2>
          <p className="mt-3 text-slate-300">
            {displayParagraph(content, '004_fill_form')}
          </p>
          <ContactForm />
          <p className="mt-3 text-slate-300">
            {displayParagraph(content, '005_email_info')}
          </p>
        </Section>
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
