import React from 'react'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'




const CheckBoxOnboarding: React.FC<TouchableOpacityProps> = ({children, ...props }) => (
    <TouchableOpacity  {...props}>
       {children}
    </TouchableOpacity>
)

export default CheckBoxOnboarding;