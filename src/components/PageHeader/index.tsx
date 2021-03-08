import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    titleHeader: string;
}

import styles from './styles';

const PageHeader: React.FC<PageHeaderProps> = ({ titleHeader, title, headerRight, children }) => {
    const { navigate } = useNavigation();

    function handlerGoBack() {
        navigate('landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTopBar}>                
                    <BorderlessButton onPress={handlerGoBack}>
                        <Image  source={backIcon} resizeMode="contain" />
                    </BorderlessButton>
                    <Text style={styles.titleHeader}> {titleHeader} </Text>
                    <Image source={logoImg} resizeMode="contain" />
            </View>                        

            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {headerRight}
                
            </View>
            {children}
        </View>

    )
}

export default PageHeader;