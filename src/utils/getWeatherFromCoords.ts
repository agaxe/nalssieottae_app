import { WEATHER_API_KEY } from '@env';
import ArrowDownUpIcon from '@/assets/icons/arrow-down-up.svg';
import waterDropIcon from '@/assets/icons/water-drop.svg';
import WindIcon from '@/assets/icons/wind.svg';
import type { Coords } from '@/shared/types/coords';
import type { CurrentWeather } from '@/shared/types/currentWeather';
import type { DailyWeather } from '@/shared/types/dailyWeather';
import { getDayOfTheWeek } from './getDayOfTheWeek';
import { getWeatherIcon } from './getWeatherIcon';

interface ReturnType {
  current: CurrentWeather;
  daily: DailyWeather[];
}

interface WeatherData {
  current: {
    weather: { icon: string }[];
    temp: number;
    wind_speed: number;
    humidity: number;
  };
  daily: {
    dt: number;
    weather: { icon: string }[];
    temp: {
      min: number;
      max: number;
      day: number;
    };
  }[];
}

export const getWeatherFromCoords = async ({
  latitude,
  longitude,
}: Coords): Promise<ReturnType> => {
  const excludeValues = 'minutely,hourly,alert';
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeValues}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`;

  const weather: WeatherData = await fetch(url).then(res => res.json());
  const { current, daily } = weather;

  const data: ReturnType = {
    current: {
      icon: getWeatherIcon(current.weather[0].icon),
      temp: Math.round(current.temp),
      details: [
        {
          key: 'windSpeed',
          value: `${current.wind_speed}m/s`,
          icon: String(WindIcon),
        },
        {
          key: 'humidity',
          value: `${current.humidity}%`,
          icon: String(ArrowDownUpIcon),
        },
        {
          key: 'temp',
          value: `${Math.round(daily[0].temp.min)}°~${Math.round(
            daily[0].temp.max,
          )}°`,
          icon: String(waterDropIcon),
        },
      ],
    },
    daily: daily
      .filter((_: any, idx: number) => idx !== 0 && idx !== 7)
      .map((day: WeatherData['daily'][0]) => {
        const date = new Date(day.dt * 1000);

        return {
          dayWeek: getDayOfTheWeek(date),
          icon: getWeatherIcon(day.weather[0].icon),
          temp: Math.round(day.temp.day),
        };
      }),
  };

  return data;
};
