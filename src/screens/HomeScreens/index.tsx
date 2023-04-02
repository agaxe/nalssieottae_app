import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  StatusBar,
  Linking,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Container } from '@/components/Container';
import type { Coords } from '@/shared/types/coords';
import type { CurrentWeather } from '@/shared/types/currentWeather';
import type { DailyWeather } from '@/shared/types/dailyWeather';
import type { PermissionStatus } from '@/shared/types/permission';
import { checkLocationPermission } from '@/utils/checkLocationPermission';
import { getAddressFromCoords } from '@/utils/getAddressFromCoords';
import { getCurrentLocationCoords } from '@/utils/getCurrentLocationCoords';
import { getWeatherFromCoords } from '@/utils/getWeatherFromCoords';
import { requestLocationPermission } from '@/utils/requestLocationPermission';
import { PermissionModal } from './components/PermissionModal';
import { Weather } from './components/Weather';
import { WeatherList } from './components/WeatherList';
import { bgImage } from './data';

export const HomeScreen = () => {
  const [isPermissionModal, setIsPermissionModal] = useState<null | boolean>(
    null,
  ); // 권한 요청 모달 여부
  const [locationPermission, setLocationPermission] = useState<
    PermissionStatus | ''
  >(''); // 위치 권한 결과값

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
      const permission = await checkLocationPermission();

      setLocationPermission(permission);
      setIsPermissionModal(permission === 'denied');
    };

    checkPermission();
  }, []);

  // 권한 요청 모달이 닫히는 경우
  useEffect(() => {
    if (isPermissionModal === false) {
      const onSuccess = async (coords: Coords) => {
        setLocationPermission('granted');

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
  }, [isPermissionModal]);

  // 모달 확인 버튼 클릭
  const handlePressModalSubmitBtn = async () => {
    const permission = await requestLocationPermission();
    setIsPermissionModal(false);

    setLocationPermission(permission);
  };

  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={styles.bgImage}
      blurRadius={5}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <Container style={styles.containerInner}>
            {isPermissionModal ? (
              <PermissionModal submitPress={handlePressModalSubmitBtn} />
            ) : null}
            {isPermissionModal === false &&
              locationPermission !== 'granted' && (
                <View>
                  <Text style={{ color: 'white' }}>{locationPermission}</Text>
                  <Text style={{ color: 'white' }}>설정을 진행해주세요</Text>
                  <TouchableOpacity onPress={() => Linking.openSettings()}>
                    <Text style={{ color: 'white' }}>설정</Text>
                  </TouchableOpacity>
                </View>
              )}
            {locationPermission === 'granted' && (
              <>
                {currentWeather?.icon && (
                  <Weather data={currentWeather} address={currentAddress} />
                )}
                {dailyWeathers && <WeatherList data={dailyWeathers} />}
              </>
            )}
          </Container>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    justifyContent: 'center',
    paddingHorizontal: 18,
    rowGap: 36,
  },
  bgImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
});
