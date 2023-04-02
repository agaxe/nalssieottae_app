import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    return await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  }

  if (Platform.OS === 'android') {
    return await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  }

  return 'denied';
};
