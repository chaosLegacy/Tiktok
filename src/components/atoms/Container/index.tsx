import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

import { View } from '@/components/templates/Themed';

type ContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
const Container = ({ children, style }: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;
