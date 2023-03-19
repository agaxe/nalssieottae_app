export interface CurrentWeather {
  icon: string;
  temp: number;
  details: { key: string; value: string; icon: string }[];
}
