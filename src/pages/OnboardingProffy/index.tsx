import React from 'react';
import { View, Text } from 'react-native';

import ViewPower from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';


import RoundedButton from '../../components/RoundedButton';

import iconProffy from '../../assets/images/icons/studyMaior.png'
import iconStudy from '../../assets/images/icons/give-classesMaior.png'
import Onboarding from '../../components/Onboarding';
import BackgroundProffy from '../../assets/images/BackgroundProffy.png';
import BackgroundStudy from '../../assets/images/BackgroundStudy.png';

import styles from './styles';


function OnboardingProffy() {
    const { navigate } = useNavigation();


    function handlerNavigateToLoginPages() {
        navigate('PageLogin');
    }
    
    return (

        
        <ViewPower style={{flex: 1}} initialPage={0}   >
            <View key={1}>
                <Onboarding 
                style={{backgroundColor: '#8257E5'}} 
                imagem={BackgroundProffy}
                icon={iconProffy }
            />
            <View style={styles.container}>

                <Text style={styles.numericProffy}>01.</Text>
            
                <Text style={styles.titleProffy}>Encontre vários professores para ensinar você</Text>

            </View>
            </View>
            <View key={2}>
                <Onboarding 
                style={{backgroundColor: '#04D361'}} 
                imagem={BackgroundStudy}
                icon={iconStudy}
            />
            <View style={styles.container}>

                <Text style={styles.numericProffy}>02.</Text>
            
                <Text style={styles.titleProffy}>Ou dê aulas sobre o que você mais conhece</Text>

                <RoundedButton style={styles.iconBack}  onPress={handlerNavigateToLoginPages} />

            </View>
            </View>            
        </ViewPower>


    )
}

export default OnboardingProffy;