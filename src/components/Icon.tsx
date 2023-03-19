import React from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';
import { View, ViewStyle } from 'react-native';

interface IconProps extends XmlProps {
  style?: ViewStyle;
}

export const Icon = ({ width, height, style, ...rest }: IconProps) => {
  return (
    <View style={{ width, height, ...style }}>
      <SvgXml width="100%" height="100%" {...rest} />
    </View>
  );
};
