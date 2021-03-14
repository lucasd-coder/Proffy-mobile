import React, {useCallback, useState} from 'react';
import { 
    ImageSourcePropType, 
    TextInput, 
    TextInputProps, 
    View, 
    Image,
    Text,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

interface InputProps extends TextInputProps {
    icon?: ImageSourcePropType;
    inputRef?: string | React.RefObject<TextInput> | ((instance: TextInput | null) => void) | null | undefined;
    iconPress?: ((event: GestureResponderEvent) => void) | undefined;
    label?: string,
    isFocusedBorder?: boolean;
    labelStyleFilled?: StyleProp<TextStyle>;
    styleContainer?:  StyleProp<ViewStyle>;
   
}

const Input: React.FC<InputProps> = ({
    icon, 
    label, 
    iconPress, 
    labelStyleFilled, 
    isFocusedBorder, 
    inputRef,
    styleContainer,
    ...rest}) => {

    const [isFocused, setIsFocused] = useState(false);

    const labelStyle = {
        position: 'absolute',
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,      
        left: 0,        
        top:  isFocused ? 4 : undefined,       
        marginLeft: 20,       
        fontSize: isFocused ? 10 : 14,
        color: '#9C98A6',
      } as StyleProp<TextStyle>;

      const borderLeft = {
        height: isFocused ? 40 : undefined, 
        borderLeftWidth: isFocused ? 2 : undefined, 
        borderLeftColor: isFocused ?'#8257E5' : undefined, 
        borderTopLeftRadius: isFocused ? 8 : undefined,
        opacity: isFocused ? 0.5 : undefined 

      } as StyleProp<ViewStyle>

      const handleInputFocus = useCallback(() => {
        setIsFocused(true);
      }, []);

      const handleInputBlur = useCallback(() => {
          setIsFocused(false);
      }, [])    
    
    return (
        <View style={[styles.contaier, styleContainer]} >

          {isFocusedBorder && 
          <View style={borderLeft}/> 
          }
                
        <Text style={[labelStyle, labelStyleFilled]}>
          { label }
        </Text>

            <TextInput 
                style={styles.textInput} 
                {...rest} 
                ref={inputRef}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}               
                 
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