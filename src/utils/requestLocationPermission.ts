import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

/**
 *
 * @returns disabled: 위치 서비스 비활성화
 * @returns granted: 권한 허용
 * @returns denied: 권한 거부
 * @returns restricted: 권한 제한
 */
export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    return await Geolocation.requestAuthorization('always');
  }

  if (Platform.OS === 'android') {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }

  return null;
};
