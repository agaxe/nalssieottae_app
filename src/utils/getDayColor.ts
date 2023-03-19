import type { Weather } from '@/shared/types/weather';
import { theme } from '@/shared/styles/theme';

export const getDayColor = (day: Weather['day']) => {
  if (day === 'SAT') {
    return theme.blue;
  }
  if (day === 'SUN') {
    return theme.red;
  }

  return theme.grey;
};
