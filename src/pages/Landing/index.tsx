import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { signOut } from '../../services/storage';
import {useDispatch} from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import Onboarding from '../../components/Onboarding';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import iconSair from '../../assets/images/Sair.png';

import styles from './styles';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    const { navigate } = useNavigation(); 
    
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })

    }, []);

    function handleNavigateToGiveClassesPage() {
        navigate('giveClasses');
    }

    function handlerNavigateToStudyPages() {
        navigate('study');
    }

    const logout = useCallback( async () => {        
        
        await signOut();
        
        dispatch(actions.logount());     
                                                     
    }, []);
    
    return (
        <View style={{ flex: 1}}>
         <Onboarding 
           imagem={landingImg} 
           icon={iconSair} 
           style={styles.header}
           iconStyle={styles.iconPrimary} 
           imagemBackgroundStyle={styles.imagemHeader}
           onPressIcon={logout}
                  
        />
            <View style={styles.container}>

                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handlerNavigateToStudyPages}
                        style={[styles.button, styles.buttonPrimary]}
                    >
                        <Image source={studyIcon} />

                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton
                        onPress={handleNavigateToGiveClassesPage}
                        style={[styles.button, styles.buttonSecundary]}
                    >
                        <Image source={giveClassIcon} />

                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                </View>

                <Text style={styles.totalConnections}>
                    Total de {totalConnections} conexôes jâ realizadas {' '}
                    <Image source={heartIcon} />
                </Text>


            </View>
        </View>

    )
}

export default Landing;