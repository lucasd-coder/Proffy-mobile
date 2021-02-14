import React, { useCallback, useRef, useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    KeyboardAvoidingView, 
    Platform, 
    TextInput, 
    ScrollView, 
    Keyboard,
    Alert   
} from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import isEmail from 'validator/lib/isEmail';

import * as actions from '../../store/modules/auth/actions';

import backgroundLogin from '../../assets/images/BackgroundLogin.png';
import logo from '../../assets/images/Proffy.png';
import notVerSenha from '../../assets/images/icons/notVerSenha.png';
import verSenha from '../../assets/images/icons/verSenha.png';


import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input/Index';
import CheckBox from '../../components/Checkbox';

import styles from './styles';

  

function PageLogin() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [passwordText, setPasswordText] = useState('');
    const [emailText, setEmailText] = useState('');
    const passwordRef = useRef<TextInput>(null);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isBackground, setIsBackground] = useState(false);
   

    useEffect(() => {
       const open =  Keyboard.addListener('keyboardDidShow', 
        () => {
            setIsBackground(true);
            }
        );
        const close = Keyboard.addListener('keyboardDidHide', 
         () => {
             setIsBackground(false);
         }
        );
        return () => {
            open.remove();
            close.remove();
        }
      }, [])
    
    const { navigate } = useNavigation();
    const dispatch = useDispatch();
    
    function handlerNavigateToCreateAccount() {
        navigate('CreateAccount');
    }  

    const handleChecck = useCallback(() => {              
        setToggleCheckBox(state => !state);
    }, []);

    const handleSubmit = () => {
        
       if(!isEmail(emailText)) {
            Alert.alert('E-mail inválido');
       }
       if(passwordText.length < 5 || passwordText.length > 255) {
           Alert.alert('Senha inválida');
       }
       
       dispatch(actions.loginRequest(
            {
              email: emailText, 
              password: passwordText
            }));
    }

    
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
            <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
            >
            <View  style={styles.main}> 
                <Header 
                    style={styles.header} 
                    imagem={backgroundLogin}
                    icon={logo}                 
                />
                <View  style={styles.form} >
                    
                    <View style={styles.section}>
                        <Text style={styles.title}>Fazer login</Text>
                        <RectButton onPress={handlerNavigateToCreateAccount}>
                           <Text style={styles.linkCriate}>Criar uma conta</Text>
                        </RectButton>
                    </View>

                    <View >
                        <Input                     
                        autoCorrect={false}
                        value={emailText}                     
                        autoCapitalize='none'
                        keyboardType="email-address"
                        label="E-mail"
                        returnKeyType= "next"                        
                        onSubmitEditing={() => {
                            passwordRef.current?.focus()
                        }}
                        onChangeText={state => setEmailText(state)}
                        labelStyleFilled={emailText.length > 0 ? { top: 4 } : undefined}                
                        />                                    
                    </View>
                    <View >
                        <Input 
                            icon={isSecureEntry ? notVerSenha : verSenha}                        
                            value={passwordText}
                            autoCapitalize="none" 
                            iconPress={() => {
                                setIsSecureEntry(prev => !prev)
                            }}                            
                            autoCorrect={false}
                            secureTextEntry={isSecureEntry}                   
                            returnKeyType="send"                        
                            onChangeText={text => { 
                                setPasswordText(text)
                            }}
                            inputRef={passwordRef}
                            label="Senha"
                            isFocusedBorder={true} 
                            labelStyleFilled={passwordText.length > 0 ? { top: 4 } : undefined }                                                                                                                
                        />                
                    </View>


                    <View style={styles.section}>
                    
                    <CheckBox 
                            selected={toggleCheckBox} 
                            onPress={handleChecck}
                            background={ toggleCheckBox ? '#04D361': '#FFFFFF'}                                              
                            color={'#FFFFFF'}
                    />                        
                        <Text style={styles.remember}>Lembrar-se</Text>
                        <RectButton >
                            <Text style={styles.forgotIt}>Esqueci minha senha</Text>
                        </RectButton>

                    </View>

                        <Button 
                            stylesButton={[{backgroundColor: isBackground ? '#04D361' : '#DCDCE5'}]} 
                            onPress={() => handleSubmit()}
                        >
                            Entrar
                        </Button>

                    </View>
                </View> 
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

export default PageLogin;