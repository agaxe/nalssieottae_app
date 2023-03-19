import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import type { DailyWeather } from '@/shared/types/dailyWeather';
import { WeatherItem } from './WeatherItem';

interface WeatherListProps {
  data: DailyWeather[];
}

export const WeatherList = ({ data = [] }: WeatherListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={styles.weatherList}
        data={data}
        renderItem={({ item, index }) => (
          <WeatherItem data={item} index={index} />
        )}
        keyExtractor={item => item.dayWeek}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  weatherList: {},
});
