import Sun from '@/assets/icons/sun.svg';
import CloudSun from '@/assets/icons/cloud-sun.svg';
import Cloudy from '@/assets/icons/cloudy.svg';
import Clouds from '@/assets/icons/clouds.svg';
import CloudDrizzle from '@/assets/icons/cloud-drizzle.svg';
import CloudRain from '@/assets/icons/cloud-rain.svg';
import CloudLightning from '@/assets/icons/cloud-lightning.svg';
import CloudSnow from '@/assets/icons/cloud-snow.svg';
import CloudHaze from '@/assets/icons/cloud-haze.svg';
import { SvgProps } from 'react-native-svg';

export const getWeatherIcon = (id: string) => {
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

  return String(weatherIcons[id]);
};
