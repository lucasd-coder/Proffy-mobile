import { Alert } from 'react-native';
import { call, put, takeLatest, all  } from 'redux-saga/effects';
import { setData } from '../../../services/storage';

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
    
        const { token } = response.data; 

        api.defaults.headers.authorization = `Bearer ${token}`;       
        
        yield call(setData, '@Proffy:token' ,token);        
            
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

        navigate('concludedRegister');
                                       
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

