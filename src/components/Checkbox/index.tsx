import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { TouchableOpacity, GestureResponderEvent } from 'react-native'

import styles from './styles'

interface CheckBoxProps {
    selected: boolean;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    color: string,
    background: string
}

const CheckBox: React.FC<CheckBoxProps> = ({selected, onPress, background, color, ...props }) => (
    <TouchableOpacity style={[styles.checkBox, { backgroundColor: background }]} onPress={onPress} {...props}>
       { selected && 
            < Icon
                size={20}
                color={color}
                name={'done'}
            /> 
        }
    </TouchableOpacity>
)

export default CheckBox