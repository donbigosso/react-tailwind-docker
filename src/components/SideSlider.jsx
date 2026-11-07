import testImage from '../images/banner/staryrynek.jpg';
const slides = {
  right: 'right-0 w-148 translate-x-144 hover:translate-x-4 active:translate-x-4',
  left: 'left-0 w-148 -translate-x-144 hover:-translate-x-4 active:-translate-x-4',
};
const crocodile = {
  right: 'bg-[url("/sliders/Crocodile_RS.png")]',
  left: 'bg-[url("/sliders/Crocodile_LS.png")]',
};

export default function SideSlider({
  side = 'left',
  width = 94,
  image,
  text = 'Tutaj ma być treść ciekawostki',
}) {
  return (
    <div
      id="slider-container"
      className={`absolute flex flex-col top-4 h-64 rounded-lg  transition-transform duration-1000 ease-in-out hidden md:block overflow-hidden ${slides[side]}`}
    >
      <div
        className={`h-24 py-2 flex ${side === 'right' ? 'flex-row-reverse' : 'flex-row'} ${crocodile[side]} bg-cover bg-center`}
      >
        <div className="w-136 "></div>
        <div className="w-full text-yellow-400 text-center text-2xl font-bold pt-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
          Ciekawostka
        </div>

        <div className="w-72"></div>
      </div>
      <div className={`h-40 flex ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-48 bg-yellow-600 rounded-sm overflow-hidden">
          <img src={image} alt="Slider image" className="w-full h-full object-cover " />
        </div>

        <div className="w-100  bg-[url('/sliders/Burnt_paper.png')] bg-cover bg-contain bg-center  bg-no-repeat">
          <div className="px-6 py-8">
            <p className="text-black text-sm">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
