import { useEffect, useState, useCallback } from 'react';
import { Linking, Alert } from 'react-native';
import { useLocationPermission } from '@/hooks/useLocationPermission';
import type { Coords } from '@/shared/types/coords';
import type { CurrentWeather } from '@/shared/types/currentWeather';
import type { DailyWeather } from '@/shared/types/dailyWeather';
import { getAddressFromCoords } from '@/utils/getAddressFromCoords';
import { getCurrentLocationCoords } from '@/utils/getCurrentLocationCoords';
import { getWeatherFromCoords } from '@/utils/getWeatherFromCoords';

export const useWeather = () => {
  const {
    locationPermission,
    setCheckLocationPermission,
    setRequestLocationPermission,
  } = useLocationPermission();
  const [isPermissionModal, setIsPermissionModal] = useState<null | boolean>(
    null,
  );

  const [currentAddress, setCurrentAddress] = useState('');
  const [dailyWeathers, setDailyWeathers] = useState<DailyWeather[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    icon: '',
    temp: 0,
    details: [],
  });

  // 초기 권한 체크
  useEffect(() => {
    const checkPermission = async () => {
      const permission = await setCheckLocationPermission();
      setIsPermissionModal(permission === 'denied');
    };

    checkPermission();
  }, [setCheckLocationPermission]);

  // 권한 요청 모달이 닫히는 경우
  useEffect(() => {
    if (isPermissionModal === false) {
      const onSuccess = async (coords: Coords) => {
        const address = await getAddressFromCoords(coords);
        const { current, daily } = await getWeatherFromCoords(coords);

        setCurrentAddress(address);
        setCurrentWeather(current);
        setDailyWeathers(daily);
      };

      type Error = Parameters<
        Parameters<typeof getCurrentLocationCoords>[1]
      >[0];

      const onError = (error: Error) => {
        if (error.name === 'PermissionError') {
          console.log('위치 권한 거부');
        }
      };

      getCurrentLocationCoords(onSuccess, onError);
    }
  }, [isPermissionModal, locationPermission]);

  // 권환이 거부된 경우
  useEffect(() => {
    if (isPermissionModal === false && locationPermission !== 'granted') {
      Alert.alert(
        '현재 위치를 찾을 수 없습니다',
        '앱 설정을 통해 위치 서비스 권한을 설정할 수 있습니다.',
        [
          {
            text: '취소',
            style: 'cancel',
          },
          { text: '설정', onPress: () => Linking.openSettings() },
        ],
      );
    }
  }, [isPermissionModal, locationPermission]);

  // 위치 권한 요청 후 상태 변경
  const handleLocationPermission = useCallback(async () => {
    await setRequestLocationPermission();
    setIsPermissionModal(false);
  }, [setRequestLocationPermission]);

  return {
    weahter: {
      currentAddress,
      dailyWeathers,
      currentWeather,
    },
    permission: {
      isPermissionModal,
      locationPermission,
    },
    handleLocationPermission,
  };
};
