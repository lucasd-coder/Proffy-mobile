import React from 'react';
import { View, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Concluded from '../../components/Concluded';

import styles from './styles';

function ConcludedRegister() {
    return (
        <View style={styles.container}>
            <Concluded  title="Cadastro concluído!" text="Agora você faz parte da plataforma da Proffy"/>
            <RectButton>
                <Text>Fazer login</Text>
            </RectButton>
        </View>
    );
}

export default ConcludedRegister;