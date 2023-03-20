import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  StatusBar,
} from 'react-native';
import { Container } from '@/components/Container';
import type { Coords } from '@/shared/types/coords';
import type { CurrentWeather } from '@/shared/types/currentWeather';
import type { DailyWeather } from '@/shared/types/dailyWeather';
import { getAddressFromCoords } from '@/utils/getAddressFromCoords';
import { getCurrentLocationCoords } from '@/utils/getCurrentLocationCoords';
import { getWeatherFromCoords } from '@/utils/getWeatherFromCoords';
import { Weather } from './components/Weather';
import { WeatherList } from './components/WeatherList';
import { bgImage } from './data';

export const HomeScreen = () => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [dailyWeathers, setDailyWeathers] = useState<DailyWeather[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    icon: '',
    temp: 0,
    details: [],
  });

  useEffect(() => {
    const onSuccess = async (coords: Coords) => {
      const address = await getAddressFromCoords(coords);
      const { current, daily } = await getWeatherFromCoords(coords);

      setCurrentAddress(address);
      setCurrentWeather(current);
      setDailyWeathers(daily);
    };

    const onError = (error: Error) => {
      console.error('error', error);
    };

    getCurrentLocationCoords(onSuccess, onError);
  }, []);

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
            {currentWeather?.icon && (
              <Weather data={currentWeather} address={currentAddress} />
            )}
            {dailyWeathers && <WeatherList data={dailyWeathers} />}
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
  },
});
