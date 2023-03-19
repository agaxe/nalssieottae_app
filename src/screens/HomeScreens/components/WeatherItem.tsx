import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { theme } from '@/shared/styles/theme';
import type { Weather } from '@/shared/types/weather';
import { getDayColor } from '@/utils/getDayColor';
import { getWeatherIcon } from '@/utils/getWeatherIcon';

interface WeatherItemProps {
  data: Weather;
  index: number;
}

const getBorderStyle = () => {
  return {
    borderLeftColor: theme.grey,
    borderLeftWidth: 1,
  };
};

export const WeatherItem = ({ data, index }: WeatherItemProps) => {
  const borderStyle = index !== 0 ? getBorderStyle() : {};

  return (
    <View
      style={{
        ...styles.container,
        ...borderStyle,
      }}>
      <Text
        style={{
          ...styles.day,
          color: getDayColor(data.day),
        }}>
        {data.day}
      </Text>
      <Icon
        style={styles.icon}
        width={60}
        height={60}
        xml={getWeatherIcon(data.iconId)}
        fill={theme.white}
      />
      <Text style={styles.temp}>{data.temp}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#00f',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    minWidth: 120,
  },
  day: {
    color: theme.grey,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  icon: {
    marginTop: 8,
    marginBottom: 16,
  },
  temp: {
    color: theme.white,
    fontSize: 28,
    textAlign: 'center',
  },
});
