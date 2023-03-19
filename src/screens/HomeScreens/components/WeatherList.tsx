import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { Container } from '@/components/Container';
import type { Weather } from '@/shared/types/weather';
import { WeatherItem } from './WeatherItem';

export const WeatherList = () => {
  const [weathers, setWeathers] = useState<Weather[]>([
    {
      day: 'MON',
      iconId: '02',
      temp: 21,
    },
    {
      day: 'TUE',
      iconId: '02',
      temp: 21,
    },
    {
      day: 'WED',
      iconId: '02',
      temp: 21,
    },
    {
      day: 'THU',
      iconId: '02',
      temp: 21,
    },
    {
      day: 'FRI',
      iconId: '02',
      temp: 21,
    },
    {
      day: 'SAT',
      iconId: '02',
      temp: 21,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={styles.weatherList}
        data={weathers}
        renderItem={({ item, index }) => (
          <WeatherItem data={item} index={index} />
        )}
        keyExtractor={item => item.day}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  weatherList: {
    //height: 100,
  },
});
