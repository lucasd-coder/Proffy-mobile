import React from 'react';
import { View, Image, StyleProp, ViewStyle,ImageSourcePropType } from 'react-native';

import styles from './styles';

interface OnboardingProps{
    imagem: ImageSourcePropType;
    icon: ImageSourcePropType;
    style: StyleProp<ViewStyle>;
    
}


const Onboarding: React.FC<OnboardingProps> = ({imagem, icon, style}) => {
    return (
        <View style={styles.container } {...style}>
           <Image source={imagem} style={styles.imageBackground}/>
           <Image source={icon} />
        </View>       
    )
}

export default Onboarding;