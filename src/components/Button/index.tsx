import React from 'react';
import { StyleProp, Text, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';


import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  stylesButton?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = ({ children, stylesButton,...rest }) => {
    return (

      <TouchableOpacity 
        style={[styles.container, stylesButton]} 
        {...rest} 
      >


        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    )

};

export default Button;
