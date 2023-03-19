import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface ContainerProps extends ViewProps {}

export const Container = ({ children, style }: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
