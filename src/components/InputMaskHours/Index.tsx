import React from 'react';
import { 
    TextInput, 
    TextInputProps, 
} from 'react-native';

import {  maskCurrency, maskHours } from '../../util/mask';

interface InputProps extends TextInputProps {
    inputRef?: string | React.RefObject<TextInput> | ((instance: TextInput | null) => void) | null | undefined;    
    mask: "currency" | "hours";
    inputMaskChange: any; 
}

const InputMaskHours: React.FC<InputProps> = ({   
    inputRef,    
    mask,
    inputMaskChange,
    ...rest}) => {

      function handleChange(text: string) {
        if (mask === "currency") {
          const value = maskCurrency(text);
          inputMaskChange(value);
        }

        if(mask === "hours") {
          const value = maskHours(text);
          inputMaskChange(value);
        }
      }
    
    return (

            <TextInput               
                {...rest} 
                ref={inputRef}                
                onChangeText={(text) => handleChange(text)}                               
            />
                        
    )
}



export default InputMaskHours;