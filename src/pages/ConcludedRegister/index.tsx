import React from 'react';
import { View, Text} from 'react-native';
import Button from '../../components/Button';

import Concluded from '../../components/Concluded';

import styles from './styles';

function ConcludedRegister() {
    return (
        <View style={styles.container}>
            <Concluded  
              title="Cadastro concluído!" 
              text="Agora você faz parte da plataforma da Proffy"               
              titleStyles={styles.title}
              textStyles={styles.subTitle}
            />

            <Button stylesButton={styles.button} > 
                Fazer login 
            </Button>            
        </View>
    );
}

export default ConcludedRegister;