import logo from '../images/logo.png';
import WeatherWrapper from './WeatherWrapper.jsx';
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="PolAfri" className="h-10 w-auto" />
        </a>
        <WeatherWrapper />
      </div>
    </header>
  );
}
