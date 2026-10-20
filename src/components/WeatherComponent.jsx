export default function WeatherComponent({ place, temperature, iconFilename }) {
  const imageFolder = '/weather_icons/';
  const imagePath = `${imageFolder}${iconFilename}`;
  if (temperature) {
    return (
      <div className="w-1/2 sm:w-auto">
        {place} | {temperature}° C | <img src={imagePath} alt={iconFilename} className="inline h-7" />
      </div>
    );
  }
}
