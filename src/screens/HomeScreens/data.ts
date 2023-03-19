import ArrowDownUpIcon from '@/assets/icons/arrow-down-up.svg';
import waterDropIcon from '@/assets/icons/water-drop.svg';
import WindIcon from '@/assets/icons/wind.svg';

interface WeatherDetail {
  name: string;
  icon: string;
  value: string;
}

export const bgImage = { uri: 'https://source.unsplash.com/960x540/?nature' };

export const weatherDetails: WeatherDetail[] = [
  {
    name: 'windSpeed',
    icon: String(WindIcon),
    value: '2.51m/s',
  },
  {
    name: 'temp',
    icon: String(ArrowDownUpIcon),
    value: '0°~ 9°',
  },
  {
    name: 'humidity',
    icon: String(waterDropIcon),
    value: '90%',
  },
];
