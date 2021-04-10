import React from 'react';
import { View, Image, StyleProp, ViewStyle, Text, TextStyle, ImageStyle} from 'react-native';

import feito from '../../assets/images/icons/feito.png';

import styles from './styles';

import bacground from '../../assets/images/BackgroundConcluded.png';

interface ConcludedProps{
    style?: StyleProp<ViewStyle>;
    title: string;
    titleStyles?: StyleProp<TextStyle>;
    text:string;
    textStyles?: StyleProp<TextStyle>;
    imagemBackgroundStyles?: StyleProp<ImageStyle>
}

const Concluded: React.FC<ConcludedProps> = ({ style, title, imagemBackgroundStyles,titleStyles, text, textStyles}) => {
    return (
        <View style={styles.container} >
           <Image source={bacground} style={imagemBackgroundStyles}/>

           <View style={styles.section}>
                <Image source={feito} style={styles.iconConcluded}  />
                <Text style={titleStyles}>{title}</Text>
                <Text style={textStyles}>{text}</Text>
           </View>
        </View>       
    )
}

export default Concluded;