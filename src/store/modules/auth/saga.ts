import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { call, put, takeLatest, all  } from 'redux-saga/effects';

import api from '../../../services/api';
import { navigate } from '../../../services/RootNavigation';
import { loginRequest, loginSuccess, loginFailure, registerRequest, registerCreatedSuccess, registerFailure } from './actions';
import { ActionTypes } from './types';

type RequestLogin = ReturnType<typeof loginRequest>;
type RequestRegister = ReturnType<typeof registerRequest>


function* checkLoginRequest({ payload }: RequestLogin) {
    try {
       
        const response = yield call(api.post, '/auth', payload);
        
        yield put(loginSuccess({...response.data}));
    
        const { token, user } = response.data;

        yield AsyncStorage.multiSet([
            ['@Proffy:token', token],
            ['@Proffy:user', JSON.stringify(user)],
          ]);
      
        api.defaults.headers.authorization = `Bearer ${token}`;

    
            
    } catch (error) { 
               
        Alert.alert(
            'Erro na autenticação',
            'Ocorreu um erro ao fazer login, cheque as credenciais.',
          );      

       yield put(loginFailure(error));
    }
}

function* checkRegisterRequest({ payload }: RequestRegister) {
    try {
        
        const response = yield call(api.post, '/register', payload); 

        yield put(registerCreatedSuccess({...response.data}));

        navigate('ConcludedRegister');

                                       
    } catch (error) {

    
        console.log(error);
                
        Alert.alert(
            'Erro no cadastro',
            'Ocorreu um erro ao fazer cadastro, tente novamente.',
          );

          yield put(registerFailure(error));
        
    }
}
 
export default all([
    takeLatest(ActionTypes.loginrequest, checkLoginRequest),
    takeLatest(ActionTypes.registerrequest, checkRegisterRequest),
])

