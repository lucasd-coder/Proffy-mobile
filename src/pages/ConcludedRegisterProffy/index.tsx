import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { removeData } from '../../services/storage';

import Button from '../../components/Button';

import Concluded from '../../components/Concluded';

import styles from './styles';

function ConcludedRegisterProffy() {
    const dispatch = useDispatch();
   
    const handlerNavigateToLoginPages = useCallback( async () => {        
        
        await removeData('@Proffy:token');
        
        dispatch(actions.logount());                                                          
    }, []);


    return (
        <View style={styles.container}>
            <Concluded  
              title="Cadastro Salvo!" 
              text="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp."               
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

export default ConcludedRegisterProffy;