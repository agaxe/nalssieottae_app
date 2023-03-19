import { StyleSheet, View, ViewProps } from 'react-native';
import React from 'react';

interface ContainerProps extends ViewProps {}

export const Container = ({ children, style }: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
