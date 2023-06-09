import Geolocation from 'react-native-geolocation-service';
import type { Coords } from '@/shared/types/coords';
import { checkLocationPermission } from '@/utils/checkLocationPermission';

interface Err extends Error {
  name: 'PermissionError' | 'GeolocationError';
}

export const getCurrentLocationCoords = async (
  onSuccess: ({ latitude, longitude }: Coords) => void,
  onError: (error: Err) => void,
) => {
  const permission = await checkLocationPermission();

  if (permission && permission !== 'granted') {
    const error = new Error(permission) as Err;
    error.name = 'PermissionError';

    onError(error);
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
    err => {
      const error = new Error(`${err.code}: ${err.message}`) as Err;
      error.name = 'GeolocationError';

      onError(error);
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
