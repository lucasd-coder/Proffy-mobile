import React from 'react';
import { Text } from 'react-native';

import { RectButtonProperties, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <RectButton style={styles.container} {...rest}>
    <Text style={styles.buttonText}>{children}</Text>
  </RectButton>
);

export default Button;
