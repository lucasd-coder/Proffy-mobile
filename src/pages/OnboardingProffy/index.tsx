import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';

import ViewPawer from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';

import RoundedButton from '../../components/RoundedButton';
import Checkbox from '../../components/CheckboxOnboarding';

import iconProffy from '../../assets/images/icons/studyMaior.png'
import iconStudy from '../../assets/images/icons/give-classesMaior.png'
import Onboarding from '../../components/Onboarding';
import BackgroundProffy from '../../assets/images/BackgroundProffy.png';
import BackgroundStudy from '../../assets/images/BackgroundStudy.png';
import IconBack from '../../assets/images/icons/voltar.png';

import styles from './styles';
import { useRef } from 'react';

function OnboardingProffy() {
    const { navigate } = useNavigation();
    const [currentPosition, setCurrentPosition] = useState(0);
    const pagerRef = useRef<ViewPawer>(null);
    
    const setPagination = useCallback((pageNumber: number)  =>{                
        pagerRef.current?.setPage(pageNumber);
    },[]);
        
    function handlerNavigateToLoginPages() {
        if (currentPosition === 0) {
            setPagination(1);
        } else {
            navigate('pageLogin');           
        }       
    }
    
    return (

        <View style={{ flex: 1}}>
            <ViewPawer style={{flex: 1}} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPosition(e.nativeEvent.position)} >                
                
                <View key={1}>                    
                    <Onboarding 
                    style={styles.containerPrimary} 
                    imagem={BackgroundProffy}
                    icon={iconProffy }
                />
                <View style={styles.container}>

                    <Text style={styles.numericProffy}>01.</Text>                                        
                
                    <Text style={styles.titleProffy}>Encontre vários professores para ensinar você</Text>                
                </View>
                                    
                </View>
                <View key={2} >
                    <Onboarding 
                    style={styles.containerSegundary} 
                    imagem={BackgroundStudy}
                    icon={iconStudy}
                />
                <View style={styles.container}>

                    <Text style={styles.numericProffy}>02.</Text>
                
                    <Text style={styles.titleProffy}>Ou dê aulas sobre o que você mais conhece</Text>

                </View>

                </View> 

            </ViewPawer>
            <View style={styles.footer}>
                <View style={styles.checkbox} >
                    <Checkbox 
                        style={
                        [ 
                            styles.checkboxPrimary, 
                            {
                               backgroundColor: currentPosition === 0 ? '#8257E5': '#C1BCCC' 
                            }
                        ]
                    } 
                    />
                    <Checkbox 
                    style={
                        [
                            styles.checkboxSegundary,
                            {
                                backgroundColor: currentPosition === 1 ? '#8257E5': '#C1BCCC'  
                            }
                        ]
                    }
                    />
                </View>
                <RoundedButton 
                    source={IconBack} 
                    style={styles.iconBack} 
                    onPress={handlerNavigateToLoginPages}
                />
            </View>
        </View>
        
    )
}

export default OnboardingProffy;