import React from 'react';
import {  TouchableOpacity, Image, StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';

interface RoundedButtonProps {
    style: StyleProp<ImageStyle>;
    onPress:() => any;
    source: ImageSourcePropType
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ style, onPress, source }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Image source={source}  style={style}/>
    </TouchableOpacity>
  );
};

export default RoundedButton;