import { theme } from '@/shared/styles/theme';
import type { DailyWeather } from '@/shared/types/dailyWeather';

export const getDayOfTheWeekColor = (day: DailyWeather['dayWeek']) => {
  if (day === 'SAT') {
    return theme.blue;
  }
  if (day === 'SUN') {
    return theme.red;
  }

  return theme.grey;
};
