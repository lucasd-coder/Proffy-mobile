import React, { ReactNode } from 'react';
import { View, Image, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    titleHeader?: string;
    styleContainerMain?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    subTitle?: string;
    subTitleStyle?: StyleProp<TextStyle>;
    styleHeader?: StyleProp<ViewStyle>;
}

import styles from './styles';

const PageHeader: React.FC<PageHeaderProps> = ({     
        titleStyle, 
        styleContainerMain, 
        titleHeader, 
        title, 
        headerRight,
        subTitle,
        subTitleStyle,
        styleHeader,
        children 
    }) => {

    const { navigate } = useNavigation();

    function handlerGoBack() {
        navigate('landing');
    }

    return (
        <View style={[styles.container, styleContainerMain ]}>           
            <View style={styles.containerTopBar}>                
                    <BorderlessButton onPress={handlerGoBack}>
                        <Image  source={backIcon} resizeMode="contain" />
                    </BorderlessButton>
                    <Text style={styles.titleHeader}> {titleHeader} </Text>
                    <Image source={logoImg} resizeMode="contain" />
            </View>                        

            <View style={[styles.header, styleHeader]}>
                <Text style={[styles.title, titleStyle]}>
                    {title}
                </Text>
                
                    <Text style={subTitleStyle}>
                        {subTitle}
                    </Text>               
                {headerRight}
                
            </View>
            {children}
        </View>

    )
}

export default PageHeader;