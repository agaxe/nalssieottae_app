import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from '@/shared/styles/theme';
import { Icon } from '@/components/Icon';
import { getWeatherIcon } from '@/utils/getWeatherIcon';
import { weatherDetails } from '@/screens/HomeScreens/data';

export const Weather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationTitle}>서울특별시 중곡동</Text>
      <View style={styles.todayWeather}>
        <Text style={styles.todayWeatherIcon}>
          <Icon
            width={100}
            height={100}
            xml={getWeatherIcon('02')}
            fill="white"
          />
        </Text>
        <Text style={styles.todayWeatherTemp}>26 °</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.weatherDetailList}
        data={weatherDetails}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.weatherDetailItem}>
            <Icon width={17} height={17} xml={item.icon} />
            <Text style={styles.weatherDetailItemValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#f00',
  },
  locationTitle: {
    color: theme.white,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
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
    fontWeight: '700',
  },
  weatherDetailList: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
  },
  weatherDetailItem: {
    flexDirection: 'row',
    columnGap: 8,
  },
  weatherDetailItemValue: {
    color: theme.white,
    fontWeight: '600',
  },
  weatherDetailItemIcon: {},
});
