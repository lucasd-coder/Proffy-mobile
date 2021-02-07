import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

import { RectButtonProperties, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  stylesButton?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = ({ children, stylesButton,...rest }) => (
  <RectButton style={[styles.container, stylesButton]} {...rest}>
    <Text style={styles.buttonText}>{children}</Text>
  </RectButton>
);

export default Button;
