import React, { useRef, useState, useCallback, useEffect } from 'react';
import { 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    Text, 
    View, 
    TextInput,
    Keyboard,
    Alert, 
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ViewPawer from '@react-native-community/viewpager';
import isEmail from 'validator/lib/isEmail';
import {useDispatch} from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import Input from '../../components/Input/Index';
import Button from '../../components/Button';

import back from '../../assets/images/icons/back.png';
import notVerSenha from '../../assets/images/icons/notVerSenha.png';
import verSenha from '../../assets/images/icons/verSenha.png';

import styles from './styles';
import CheckBox from '../../components/CheckboxOnboarding';
import RoundedButton from '../../components/RoundedButton';

function CreateAccount() {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    const [currentPosition, setCurrentPosition] = useState(0);
    const passwordRef = useRef<TextInput>(null);
    const sobrenomeRef = useRef<TextInput>(null);
    const pagerRef = useRef<ViewPawer>(null);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
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
       }, []);

       const handleSubmit = () => {

        if (nome.length < 4) {
            Alert.alert('O nome deve ter mais de 4 caracteres');
        }

        if (sobrenome.length < 4) {
           Alert.alert('O sobrenome deve ter mais de 4 caracteres')
        }

        if(!isEmail(email)) {
            Alert.alert('E-mail inválido');
        }

        if(password.length < 5 || password.length > 255) {
           Alert.alert('Senha inválida');
        }
        console.log({nome, sobrenome, email, password});
        
        dispatch(
            actions.registerRequest({ name: nome, surname: sobrenome, email, password}),            
        );
         
    }
    
    const setPagination = useCallback((pageNumber: number)  =>{
        pagerRef.current?.setPage(pageNumber);
    },[]);

    function handlerNavigateToLoginPages() {
        navigate('PageLogin');
    }

    return (
        <>
            <KeyboardAvoidingView
               style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <View style={styles.container} >
                        <View style={styles.header}>
                         <RoundedButton 
                            source={back}  
                            style={{tintColor: '#9C98A6', width: 20, height: 20}} 
                            onPress={handlerNavigateToLoginPages} 
                         />
                           
                            <View style={styles.checkbox}>
                                <CheckBox
                                    style={
                                        [
                                            styles.checkboxPrimary,
                                            {
                                                backgroundColor: currentPosition === 0 ? '#8257E5': '#C1BCCC' 
                                            }
                                        ]
                                    }                                    
                                />                                
                                <CheckBox
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
                        </View>

                        <ViewPawer style={{flex: 1}} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPosition(e.nativeEvent.position)} >
                            <View key={1} style={styles.containePagePrimary}>                         
                                <View  style={styles.section}>
                                    <Text style={styles.title}>
                                        Crie sua conta gratuíta
                                    </Text>
                                    <Text style={styles.subTitle}>
                                        Basta preencher esses dados e você estará conosco.
                                    </Text>
                                </View>

                                <View style={styles.form}>
                                    <Text style={styles.titleForm}>
                                        01. Quem é você?
                                    </Text>

                                    <Input 
                                        autoCapitalize="words"
                                        label="Nome"                                        
                                        returnKeyType="next"
                                        autoFocus={true}
                                        blurOnSubmit={false}                                        
                                        onSubmitEditing={() => {
                                            sobrenomeRef.current?.focus()
                                        }}
                                        labelStyleFilled={nome.length > 0 ? {top:4} : undefined}
                                        value={nome}
                                        onChangeText={state => setNome(state)}
                                    />
                                    <Input
                                        autoCapitalize="words"
                                        label="Sobrenome"
                                        returnKeyType="send"
                                        inputRef={sobrenomeRef}
                                        labelStyleFilled={sobrenome.length > 0 ? {top:4} : undefined}  
                                        value={sobrenome}
                                        onChangeText={state => setSobrenome(state)}                     
                                    />

                                    <Button 
                                        stylesButton={[styles.button,{backgroundColor: isBackground ? '#8257E5' : '#DCDCE5'}]} 
                                        onPress={() => setPagination(1)}                                                                                                                                                         
                                    >
                                        Próximo
                                    </Button>

                                   
                                </View>
                            </View>
                            <View key={2} style={styles.containeSegundary}>
                            <View  style={styles.section}>
                                    <Text style={styles.title}>
                                        Crie sua conta gratuíta
                                    </Text>
                                    <Text style={styles.subTitle}>
                                        Basta preencher esses dados e você estará conosco.
                                    </Text>
                            </View>

                                <View style={styles.form}>
                                    <Text style={styles.titleForm}>
                                        02. Email e Senha?
                                    </Text>

                                    <Input 
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        label="E-mail"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        autoFocus={true}
                                        onSubmitEditing={() => {
                                            passwordRef.current?.focus()
                                        }}
                                        labelStyleFilled={ email.length > 0 ? {top: 4} : undefined }
                                        value={email}
                                        onChangeText={state => setEmail(state)}
                                    />
                                    <Input
                                        icon={isSecureEntry ? notVerSenha : verSenha}
                                        value={password}
                                        autoCapitalize="none"
                                        label="Senha"
                                        returnKeyType="send"  
                                        iconPress={() => {
                                            setIsSecureEntry((prev) => !prev)
                                        }}                         
                                        secureTextEntry={isSecureEntry}
                                        onChangeText={(text) => {
                                            setPassword(text)
                                        }}
                                        inputRef={passwordRef}
                                        isFocusedBorder={true}
                                        labelStyleFilled={password.length > 0 ? {top: 4} : undefined}
                                    />
                                    <Button stylesButton={
                                            [
                                            styles.button, { backgroundColor: isBackground ? '#04D361' : '#DCDCE5'}
                                            ]
                                        }
                                        onPress={() => handleSubmit()}
                                    >
                                        Concluir cadastro
                                    </Button>
                                </View>                    

                            </View>
                        </ViewPawer>

                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

        </>
    )
}

export default CreateAccount;