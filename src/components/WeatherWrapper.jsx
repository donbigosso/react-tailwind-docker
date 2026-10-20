import { useState, useEffect } from 'react';

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

  useEffect(() => {
    async function load() {
      const [base, banjul, bydgoszcz, warsaw] = await Promise.all([fetchWeather(links.base), fetchWeather(links.banjul), fetchWeather(links.bydgoszcz), fetchWeather(links.warsaw)]);

      setWeather({
        base,
        banjul,
        bydgoszcz,
        warsaw,
      });
    }

    load();
  }, []);

  const timestamp = weather.banjul?.response?.[0]?.periods?.[0].timestamp;
  const gambiaTime = timestamp ? new Date(timestamp * 1000).toISOString().slice(11, 16) : '';
  const polandTime = timestamp
    ? new Date(timestamp * 1000).toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    : '';
  //const gambiaTime = new Date(timestamp * 1000).toISOString().slice(11, 16);

  return (
    <div className="text-white">
      {gambiaTime} - {polandTime}
    </div>
  );
}
