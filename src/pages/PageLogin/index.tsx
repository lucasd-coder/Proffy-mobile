import React from 'react';
import { View } from 'react-native';

import backgroundLogin from '../../assets/images/BackgroundLogin.png';
import logo from '../../assets/images/Proffy.png';
import Header from '../../components/Header';

import styles from './styles';

function PageLogin() {
    return (
        <View >
            <Header 
                style={{backgroundColor: '#8257E5'}} 
                imagem={backgroundLogin}
                icon={logo}                 
            />
            
        </View>
    )
}

export default PageLogin;