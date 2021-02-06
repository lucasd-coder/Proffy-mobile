import React, { useState } from 'react';
import { ImageSourcePropType, TextInput, TextInputProps, View, Image, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface InputProps extends TextInputProps {
    icon?: ImageSourcePropType;
    inputRef?: string | React.RefObject<TextInput> | ((instance: TextInput | null) => void) | null | undefined;
    iconPress?: ((event: GestureResponderEvent) => void) | undefined;
   
}



const Input: React.FC<InputProps> = ({icon, iconPress,inputRef,...rest}) => {
    
    return (
        <View style={styles.contaier}>

            <TextInput 
                placeholderTextColor="#9C98A6"
                style={styles.textInput} 
                defaultValue={""}
                {...rest} 
                ref={inputRef}  
                 
            />

            {icon && 
              <TouchableOpacity onPress={iconPress}>
                    <Image source={icon} style={styles.icon} /> 
              </TouchableOpacity>
            }
                  
        </View>
    )
}

export default Input;