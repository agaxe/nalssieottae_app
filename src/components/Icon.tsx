import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgXml, XmlProps } from 'react-native-svg';

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
