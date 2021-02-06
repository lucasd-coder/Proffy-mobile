import React, { useCallback, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput,
} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


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
    const [passwordText, setPasswordText] = useState(String);
    const passwordRef = useRef<TextInput>(null);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    


    const handleChecck = useCallback(() => {              
        setToggleCheckBox(state => !state);
      }, []);
    
    return (

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


            <View  style={styles.form}>
                
                <View style={styles.section}>
                    <Text style={styles.title}>Fazer login</Text>
                    <Text style={styles.linkCriate}>Criar uma conta</Text>
                </View>

                <View >
                    <Input                     
                       autoCorrect={false}                       
                       autoCapitalize='none'
                       keyboardType="email-address"
                       placeholder="E-mail"
                       returnKeyType= "next"
                       blurOnSubmit={false}
                       autoFocus = {true}
                       onSubmitEditing={() => {
                           passwordRef.current?.focus()
                       }}                  
                    />                                    
                </View>
                <View >
                    <Input 
                        icon={isSecureEntry ? notVerSenha : verSenha}                        
                        value={passwordText}
                        placeholder= "Senha"
                        autoCapitalize="none" 
                        iconPress={() => {
                            setIsSecureEntry(prev => !prev)
                        }}                      
                        secureTextEntry={isSecureEntry}                   
                        returnKeyType="send"                        
                        onChangeText={text => { 
                            setPasswordText(text)
                        }}
                        inputRef={passwordRef}                                                                                                                   
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
                    <RectButton>
                        <Text style={styles.forgotIt}>Esqueci minha senha</Text>
                    </RectButton>

                 </View>

                    <Button >
                        Entrar
                    </Button>

                </View>
            </View> 
            </ScrollView>
         </KeyboardAvoidingView>
    )
}

export default PageLogin;