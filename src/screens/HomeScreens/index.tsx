import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  StatusBar,
} from 'react-native';
import { Container } from '@/components/Container';
import { PermissionModal } from './components/PermissionModal';
import { Weather } from './components/Weather';
import { WeatherList } from './components/WeatherList';
import { bgImage } from './data';
import { useWeather } from './useWeather';

export const HomeScreen = () => {
  const {
    weahter: { currentAddress, dailyWeathers, currentWeather },
    permission: { isPermissionModal, locationPermission },
    handleLocationPermission,
  } = useWeather();

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
              <PermissionModal submitPress={handleLocationPermission} />
            ) : null}
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
