import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { theme } from '@/shared/styles/theme';
import type { CurrentWeather } from '@/shared/types/currentWeather';

interface WeatherProps {
  data: CurrentWeather;
  address: string;
}

export const Weather = ({ data, address = '' }: WeatherProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.locationTitle}
        numberOfLines={2}
        //@ts-ignore
        lineBreakStrategyIOS="hangul-word">
        {address}
      </Text>
      <View style={styles.todayWeather}>
        <Text style={styles.todayWeatherIcon}>
          <Icon width={100} height={100} xml={data.icon} fill="white" />
        </Text>
        <Text style={styles.todayWeatherTemp}>{data.temp}°</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.weatherDetailList}
        data={data.details}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.weatherDetailItem}>
            <Icon width={17} height={17} xml={item.icon} />
            <Text style={styles.weatherDetailItemValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  locationTitle: {
    color: theme.white,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    flexWrap: 'wrap',
    lineHeight: 55,
    fontFamily: 'NotoSansKR-Bold',
    width: '88%',
  },
  todayWeather: {
    columnGap: 24,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: '7%',
    alignItems: 'center',
  },
  todayWeatherIcon: {
    color: theme.white,
  },
  todayWeatherTemp: {
    color: theme.white,
    fontSize: 80,
    fontFamily: 'NotoSansKR-Bold',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  weatherDetailList: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
  },
  weatherDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  weatherDetailItemValue: {
    color: theme.white,
    //fontWeight: '600',
    fontFamily: 'NotoSansKR-Regular',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  weatherDetailItemIcon: {},
});
