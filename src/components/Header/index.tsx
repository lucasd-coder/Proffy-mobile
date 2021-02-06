import React from 'react';
import { View, Image, StyleProp, ViewStyle,ImageSourcePropType, Text} from 'react-native';

import styles from './styles';

interface HeaderProps{
    imagem: ImageSourcePropType;
    icon: ImageSourcePropType;
    style: StyleProp<ViewStyle>;
    
}


const Header: React.FC<HeaderProps> = ({imagem, icon, style}) => {
    return (
        <View style={style} >
           <Image source={imagem} style={styles.imageBackground}/>
           <Image source={icon}  />
           <Text style={styles.title}>Sua plaforma de estudos online. </Text>
        </View>       
    )
}

export default Header;