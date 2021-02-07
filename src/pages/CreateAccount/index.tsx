import React, { useRef, useState, useCallback } from 'react';
import { 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    Text, 
    View, 
    TextInput, 
    Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ViewPawer from '@react-native-community/viewpager';

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
    const [currentPosition, setCurrentPosition] = useState(0);
    const passwordRef = useRef<TextInput>(null);
    const sobrenomeRef = useRef<TextInput>(null);
    const pagerRef = useRef<ViewPawer>(null);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [passwordText, setPasswordText] = useState(String);

    
    // const fadeAnim = useRef(new Animated.Value(0)).current;

    // const buttonAnimated = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 0,
    //         duration: 3000,

    //     }).start()
    // }

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
                                        placeholder="Nome"
                                        returnKeyType="next"
                                        autoFocus={true}
                                        blurOnSubmit={false}                                        
                                        onSubmitEditing={() => {
                                            sobrenomeRef.current?.focus()
                                        }}
                                    />
                                    <Input
                                        autoCapitalize="words"
                                        placeholder="Sobrenome"
                                        returnKeyType="send"
                                        inputRef={sobrenomeRef}                          
                                    />
                                    <Button 
                                        stylesButton={styles.button} 
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
                                        placeholder="E-mail"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        autoFocus={true}
                                        onSubmitEditing={() => {
                                            passwordRef.current?.focus()
                                        }}
                                    />
                                    <Input
                                        icon={isSecureEntry ? notVerSenha : verSenha}
                                        value={passwordText}
                                        autoCapitalize="none"
                                        placeholder="Senha"
                                        returnKeyType="send"  
                                        iconPress={() => {
                                            setIsSecureEntry(prev => !prev)
                                        }}                         
                                        secureTextEntry={isSecureEntry}
                                        onChangeText={(text) => {
                                            setPasswordText(text)
                                        }}
                                        inputRef={passwordRef}
                                    />
                                    <Button stylesButton={styles.button}>
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