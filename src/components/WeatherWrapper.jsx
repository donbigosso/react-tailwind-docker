import { useState, useEffect } from 'react';
import WeatherComponent from './WeatherComponent';
import TimeComponent from './TimeComponent';

const links = {
  base: 'https://data.api.xweather.com/conditions/basse%2C%20gambia?fields=periods.weather%2C%20periods.tempC%2C%20periods.icon%2C%20periods.timestamp&client_id=VnZasUcKRAJHdIieiVSck&client_secret=yKLfL0eX9q2ncL4Aonolvh8yNDo8zk83EaSAKl6o',
  banjul:
    'https://data.api.xweather.com/conditions/banjul%2C%20gambia?fields=periods.weather%2C%20periods.tempC%2C%20periods.icon%2C%20periods.timestamp&client_id=VnZasUcKRAJHdIieiVSck&client_secret=yKLfL0eX9q2ncL4Aonolvh8yNDo8zk83EaSAKl6o',
  bydgoszcz:
    'https://data.api.xweather.com/conditions/bydgoszcz%2C%20poland?fields=periods.weather%2C%20periods.tempC%2C%20periods.icon%2C%20periods.timestamp&client_id=VnZasUcKRAJHdIieiVSck&client_secret=yKLfL0eX9q2ncL4Aonolvh8yNDo8zk83EaSAKl6o',
  warsaw:
    'https://data.api.xweather.com/conditions/warsaw%2C%20poland?fields=periods.weather%2C%20periods.tempC%2C%20periods.icon%2C%20periods.timestamp&client_id=VnZasUcKRAJHdIieiVSck&client_secret=yKLfL0eX9q2ncL4Aonolvh8yNDo8zk83EaSAKl6o',
};

async function fetchWeather(link) {
  const response = await fetch(link);
  return response.json();
}

export default function WeatherWrapper() {
  const [weather, setWeather] = useState({
    banjul: {},
    base: {},
    bydgoszcz: {},
    warsaw: {},
  });

  // seconds elapsed since we received the timestamp
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    async function load() {
      const [base, banjul, bydgoszcz, warsaw] = await Promise.all([fetchWeather(links.base), fetchWeather(links.banjul), fetchWeather(links.bydgoszcz), fetchWeather(links.warsaw)]);

      setWeather({ base, banjul, bydgoszcz, warsaw });
    }

    load();
    const id = setInterval(load, 60 * 60 * 1000); // every 60 minutes
    return () => clearInterval(id);
  }, []);

  // tick every minute
  useEffect(() => {
    const id = setInterval(() => {
      setElapsed((prev) => prev + 15);
    }, 15_000);

    return () => clearInterval(id);
  }, []);

  const timestamp = weather.banjul?.response?.[0]?.periods?.[0]?.timestamp;
  const baseMs = timestamp ? timestamp * 1000 + elapsed * 1000 : null;
  const banjulTemperature = Math.round(weather.banjul?.response?.[0]?.periods?.[0]?.tempC);
  const baseTemperature = Math.round(weather.base?.response?.[0]?.periods?.[0]?.tempC);
  const bydgoszczTemperature = Math.round(weather.bydgoszcz?.response?.[0]?.periods?.[0]?.tempC);
  const warsawTemperature = Math.round(weather.warsaw?.response?.[0]?.periods?.[0]?.tempC);
  const banjulIcon = weather.banjul?.response?.[0]?.periods?.[0]?.icon;
  const baseIcon = weather.base?.response?.[0]?.periods?.[0]?.icon;
  const bydgoszczIcon = weather.bydgoszcz?.response?.[0]?.periods?.[0]?.icon;
  const warsawIcon = weather.warsaw?.response?.[0]?.periods?.[0]?.icon;

  const gambiaTime = baseMs
    ? new Date(baseMs).toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Banjul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    : '';

  const polandTime = baseMs
    ? new Date(baseMs).toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    : '';

  return (
    <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-2 text-xs md:text-sm text-white sm:flex sm:flex-wrap sm:justify-end">
      <TimeComponent flag="🇬🇲" time={gambiaTime} />
      <WeatherComponent place="Bandżul" temperature={banjulTemperature} iconFilename={banjulIcon} />
      <WeatherComponent place="Basse" temperature={baseTemperature} iconFilename={baseIcon} />
      <TimeComponent flag="🇵🇱" time={polandTime} />
      <WeatherComponent place="Bydgoszcz" temperature={bydgoszczTemperature} iconFilename={bydgoszczIcon} />
      <WeatherComponent place="Warszawa" temperature={warsawTemperature} iconFilename={warsawIcon} />
    </div>
  );
}
