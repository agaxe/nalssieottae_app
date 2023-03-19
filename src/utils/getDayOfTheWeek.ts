import type { DailyWeather } from '@/shared/types/dailyWeather';

export const getDayOfTheWeek = (date: Date): DailyWeather['dayWeek'] => {
  const dayWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return dayWeeks[date.getDay()] as DailyWeather['dayWeek'];
};
