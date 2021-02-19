import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import Concluded from '../../components/Concluded';

import styles from './styles';

function ConcludedRegister() {
    const { navigate } = useNavigation();

    function handlerNavigateToLoginPages() {
        navigate('PageLogin');
    }

    return (
        <View style={styles.container}>
            <Concluded  
              title="Cadastro concluído!" 
              text="Agora você faz parte da plataforma da Proffy"               
              titleStyles={styles.title}
              textStyles={styles.subTitle}
            />

            <Button 
              stylesButton={styles.button} 
              onPress={handlerNavigateToLoginPages} 
            > 
                Fazer login 
            </Button>            
        </View>
    );
}

export default ConcludedRegister;