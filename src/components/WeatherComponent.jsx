export default function WeatherComponent({ place, temperature, iconFilename }) {
  const imageFolder = '/weather_icons/';
  const imagePath = `${imageFolder}${iconFilename}`;
  if (temperature) {
    return (
      <div>
        {place} | {temperature}° C | <img src={imagePath} alt={iconFilename} className="inline h-5" />
      </div>
    );
  }
}
