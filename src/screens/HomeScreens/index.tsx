import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Weather } from './components/Weather';
import { bgImage } from './data';
import { Container } from '@/components/Container';
import { WeatherList } from './components/WeatherList';

export const HomeScreen = () => {
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
            <Weather />
            <WeatherList />
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
