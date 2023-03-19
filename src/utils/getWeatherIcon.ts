import { SvgProps } from 'react-native-svg';
import CloudDrizzle from '@/assets/icons/cloud-drizzle.svg';
import CloudHaze from '@/assets/icons/cloud-haze.svg';
import CloudLightning from '@/assets/icons/cloud-lightning.svg';
import CloudRain from '@/assets/icons/cloud-rain.svg';
import CloudSnow from '@/assets/icons/cloud-snow.svg';
import CloudSun from '@/assets/icons/cloud-sun.svg';
import Clouds from '@/assets/icons/clouds.svg';
import Cloudy from '@/assets/icons/cloudy.svg';
import Sun from '@/assets/icons/sun.svg';

export const getWeatherIcon = (id: string) => {
  const weatherCode = `${id}`.replace(/\D/g, '');

  const weatherIcons: Record<string, React.FC<SvgProps>> = {
    '01': Sun,
    '02': CloudSun,
    '03': Cloudy,
    '04': Clouds,
    '09': CloudDrizzle,
    '10': CloudRain,
    '11': CloudLightning,
    '13': CloudSnow,
    '50': CloudHaze,
  };

  return String(weatherIcons[weatherCode]);
};
