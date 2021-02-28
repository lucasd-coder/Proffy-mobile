import React from 'react';
import { View, Image, StyleProp, ViewStyle,ImageSourcePropType, ImageStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface OnboardingProps{
    imagem: ImageSourcePropType;
    icon: ImageSourcePropType;
    style: StyleProp<ViewStyle>;
    iconSegundary?:ImageSourcePropType;
    iconSegundaryStyle?: StyleProp<ImageStyle>;
    iconStyle?: StyleProp<ViewStyle>;   
    imagemBackgroundStyle?: StyleProp<ImageStyle>;
    onPressIcon?: ((pointerInside: boolean) => void) | undefined;
    onPressIconSecundary?: ((pointerInside: boolean) => void) | undefined
}

const Onboarding: React.FC<OnboardingProps> = ({
    imagem, 
    icon, 
    imagemBackgroundStyle,  
    iconStyle, 
    iconSegundary, 
    style, 
    iconSegundaryStyle, 
    onPressIcon,
    onPressIconSecundary}) => {
    return (
        <View style={styles.container } {...style}>           
            <Image 
                source={imagem} 
                style={[styles.imageBackground, imagemBackgroundStyle]}                        
            />
            <RectButton style={iconStyle} onPress={onPressIcon}>
                <Image 
                  source={icon}                   
                />
            </RectButton>
           { iconSegundary && 
             <RectButton style={iconSegundaryStyle} onPress={onPressIconSecundary}>
                <Image source={iconSegundary} />
             </RectButton> 
           }
        </View>       
    )
}

export default Onboarding;