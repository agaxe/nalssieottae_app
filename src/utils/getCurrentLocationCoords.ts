import Geolocation from 'react-native-geolocation-service';
import type { Coords } from '@/shared/types/coords';
import { requestLocationPermission } from './requestLocationPermission';

export const getCurrentLocationCoords = async (
  onSuccess: ({ latitude, longitude }: Coords) => void,
  onError: Function,
) => {
  const permission = await requestLocationPermission();

  if (permission !== 'granted') {
    onError(new Error('PERMISSION NOT GRANTED'));
    return;
  }

  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;

      onSuccess({
        latitude,
        longitude,
      });
    },
    error => {
      onError(new Error(`${error.code}: ${error.message}`));
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
};
