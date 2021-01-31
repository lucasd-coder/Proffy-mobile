import React from 'react';
import {  TouchableOpacity, Image, StyleProp, ImageStyle } from 'react-native';

import IconBack from '../../assets/images/icons/voltar.png'

interface RoundedButtonProps {
    style: StyleProp<ImageStyle>;
    onPress:() => any;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ style, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Image source={IconBack}  style={style}/>
    </TouchableOpacity>
  );
};

export default RoundedButton;