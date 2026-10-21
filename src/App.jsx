import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import Button from './components/Button.jsx';
import Tile from './components/Tile.jsx';
import SectionLgColMdRow from './components/SectionLgColMdRow.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Carousel from './components/Carousel.jsx';
import { MapPinIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline';
import { getRandomBannerPhotos } from './data/bannerPhotos.js';
import Paragraph from './components/Paragraph.jsx';
import ImageModal from './components/ImageModal.jsx';
import ImageMiniature from './components/ImageMiniature.jsx';
import aboutMiniature from './images/for_content/about_01_sm.jpg';
import coatOfArms from './images/for_content/herb.svg';
import riverBasseMiniature from './images/for_content/river_basse_sm.jpg';
import stonceCirclesMiniature from './images/for_content/stone_circles_sm.jpg';
import presidents from './images/for_content/presidents.jpg';
import bansangMiniature from './images/for_content/bansang_sm.jpg';
import beachMiniature from './images/for_content/beach_sm.jpg';
import A from './components/A.jsx';
import H2 from './components/H2.jsx';
import H3 from './components/H3.jsx';
import Section from './components/Section.jsx';
import ContactForm from './components/Web3ContactForm.jsx';
import flagImage from './images/tiles/flag_sm.png';
import NewIconTile from './components/NewIconTile.jsx';
import NewImageTile from './components/NewImageTile.jsx';
import ColumnGrid from './components/ColumnGrid.jsx';
import { getContent, displayParagraph, displayHeader, displaySubheading } from './data/contentFunctions.js';
import { calculateCurrency } from './data/currencyCalculator.js';
import { getPLN_GMD, getEUR_GMD, getUSD_GMD } from './data/currencyCalculator.js';
import LocatorMap2 from './components/LocatorMap2.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [slides] = useState(() => getRandomBannerPhotos(5));
  const [isImageModalOpen, setisImageModalOpen] = useState(false);
  const [imgModalSrc, setimgModalSrc] = useState(null);
  const [modalCaption, setModalCaption] = useState('Brak podpisu');
  const [content, setContent] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({
    eurgmd: null,
    usdgmd: null,
    plngmd: null,
  });

  useEffect(() => {
    async function load() {
      const data = await getContent();
      const plnRate = await getPLN_GMD();
      const eurRate = await getEUR_GMD();
      const usdRate = await getUSD_GMD();
      setCurrencyRates({
        eurgmd: eurRate,
        usdgmd: usdRate,
        plngmd: plnRate,
      });
      setContent(data);
    }
    load();
  }, []); // empty array = run only once after first render
  const currencyCalculator = calculateCurrency({
    eurgmd: currencyRates.eurgmd,
    usdgmd: currencyRates.usdgmd,
    plngmd: currencyRates.plngmd,
  });
  console.log(currencyCalculator.USDtoGMD(17025));
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
          <p className="mt-4 text-slate-400">{displayHeader(content, '001_headline')}</p>
        </section>
        <Carousel images={slides} />
        <section id="tileSection" className="w-full max-w-4xl">
          <ColumnGrid>
            <NewImageTile href="#about" title={displayHeader(content, '002_about')} src={logo} />

            <NewImageTile title="O Gambii" href="#aboutGambia" src={flagImage} />
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
            <A href="https://youtube.com/playlist?list=PLNmoIXBH0S1EzYBc3xu5RYIrDCOpcBwII&si=KHBUW6kgXPJVtMuL" newWindow={true}>
              YouTube
            </A>
            {displayParagraph(content, '003_about_02_02')}
            <A href="https://www.facebook.com/groups/polacywgambii" newWindow={true}>
              Polacy w Gambii
            </A>
            ”.
          </Paragraph>
        </Section>
        <Section id="aboutGambia">
          <H2>{displayHeader(content, '004_about_gambia')}</H2>
          <ColumnGrid></ColumnGrid>
          <H3>Mapa Gambii</H3>
          <LocatorMap2 />
          <H3>{displayHeader(content, '005_basic_info')}</H3>
          <Paragraph>
            <ImageMiniature
              src={coatOfArms}
              alt="Herb Gambii"
              size="small"
              float="right"
              setisImageModalOpen={setisImageModalOpen}
              setimgModalSrc={setimgModalSrc}
              setModalCaption={setModalCaption}
              modalCaption="Herb Gambii (źródło: Wikipedia)"
            />
            {displayParagraph(content, '006_about_gambia_01')}
          </Paragraph>
          <Paragraph>
            <ImageMiniature
              src={riverBasseMiniature}
              alt="Rzeka Basse"
              size="medium"
              setisImageModalOpen={setisImageModalOpen}
              setimgModalSrc={setimgModalSrc}
              setModalCaption={setModalCaption}
              modalCaption="Rzeka Gambia w mieście Basse"
            />
            {displayParagraph(content, '007_about_gambia_02')}
          </Paragraph>
          <H3 id="history">Historia</H3>
          <ImageMiniature
            src={stonceCirclesMiniature}
            alt="Kamienne kręgi"
            size="medium"
            float="right"
            setisImageModalOpen={setisImageModalOpen}
            setimgModalSrc={setimgModalSrc}
            setModalCaption={setModalCaption}
            modalCaption="Kamienne kręgi w Wassu"
          />
          <Paragraph>{displayParagraph(content, '008_history_01')}</Paragraph>
          <Paragraph>{displayParagraph(content, '009_history_02')}</Paragraph>
          <ImageMiniature
            src={presidents}
            alt="Prezydenci Gambii"
            size="large"
            float="left"
            setisImageModalOpen={setisImageModalOpen}
            setimgModalSrc={setimgModalSrc}
            setModalCaption={setModalCaption}
            modalCaption="Prezydenci Gambii: Jawara, Jammeh i Barrow (źródło: Wikipedia)"
          />
          <Paragraph>{displayParagraph(content, '010_history_03')}</Paragraph>
          <H3 id="geography">Geografia</H3>
          <Paragraph>{displayParagraph(content, '011_geography_01')}</Paragraph>
          <Paragraph>
            <ImageMiniature
              src={bansangMiniature}
              alt="Bansang"
              size="small"
              float="left"
              setisImageModalOpen={setisImageModalOpen}
              setimgModalSrc={setimgModalSrc}
              setModalCaption={setModalCaption}
              modalCaption="Bansang - widok na miasto i rzekę z jednego z nielicznych wzgórz"
            />
            {displayParagraph(content, '012_geography_02')}
          </Paragraph>
          <H3 id="climate">Klimat</H3>
          <ImageMiniature
            src={beachMiniature}
            alt="Plaża"
            size="medium"
            float="right"
            setisImageModalOpen={setisImageModalOpen}
            setimgModalSrc={setimgModalSrc}
            setModalCaption={setModalCaption}
            modalCaption="W Gambii można się kąpać w oceanie przez cały rok."
          />
          <Paragraph>{displayParagraph(content, '013_climate')}</Paragraph>
        </Section>

        <Section id="contact">
          <H2>{displayHeader(content, '003_contact')}</H2>
          <p className="mt-3 text-slate-300">{displayParagraph(content, '004_fill_form')}</p>
          <ContactForm />
          <p className="mt-3 text-slate-300">{displayParagraph(content, '005_email_info')}</p>
        </Section>
      </Main>

      <ImageModal isOpen={isImageModalOpen} onClose={() => setisImageModalOpen(false)} src={imgModalSrc} alt="Obrazek PolAfri" caption={modalCaption} />
    </div>
  );
}
