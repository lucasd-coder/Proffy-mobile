import React, { useState, useRef, useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput, Alert, Platform, ImageSourcePropType } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


import iconUpload from '../../assets/images/iconUpload.png';
import iconImportant from '../../assets/images/icons/iconImportant.png';
import iconAdd from '../../assets/images/icons/add.png';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/Index';
import InputMask from '../../components/InputMask/Index';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

import { navigate } from '../../services/RootNavigation';

import styles from './styles';
import api from '../../services/api';

function GiveClasses() {

    const nameRef = useRef<TextInput>(null);
    const whatRef = useRef<TextInput> (null);
    const bioRef = useRef<TextInput>(null);
    const subjectref = useRef<TextInput>(null);
    const costRef = useRef<TextInput>(null);

    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [isCost, setCost] = useState('');
    const [isFrom, setFrom] = useState('');
    const [isTo, setIsTo] = useState('');
    const [week_day, setWeek_day] = useState(String || Number);
    const [isHours, setIsHours] = useState(Array);
    const [isAvatarId, setIsAvatarId] = useState(Object);
    const [image, setImage] = useState<string>();           
    
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                Alert.alert('Precisamos de permissões da câmera para fazer isso funcionar!');
              }
            }
          })();
    },[]);

      const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [12, 11],
          quality: 1,
        });
        
        if (!result.cancelled) {
          setImage(result.uri);         
        }
        
      };

    function addNewHours(value: string, _isDay: string, _isAte: string ) {
        const itensCopy = Array.from(isHours);
        itensCopy.push({id: isHours.length, week_day: value, from: _isDay, to: _isAte });
        setIsHours(itensCopy);
    }

    function deleteHours(index: number) {
        const itensCopy = Array.from(isHours);
        itensCopy.splice(index, 1);
        setIsHours(itensCopy);
    }
    
    const cost = isCost.replace(/\D+/g, "");
    const [from, ] = isFrom.split(' ');
    const [to, ] = isTo.split(' ');

    const schedule = [{ week_day, from, to }];

    const formData= {
        name,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    }          

    function handlerNavigateToLoginPages() {
        navigate('concludedRegisterProffy');        
    }
    
    const handleSumit = () => {                 
         api.post('/classes', formData)
         .then(async (response) => {
             if(response.status === 200) {                           
                setIsAvatarId(response.data);                            
                if(!isAvatarId.id) {
                    return handlerNavigateToLoginPages();
                }

                const data = new FormData();
                    data.append('foto',JSON.parse(
                    JSON.stringify(
                        {                
                            type: "image/jpeg",
                            name: `${isAvatarId.id}.jpeg`,
                            uri: image,                                      
                        }
                    )));
    
                    const foto_id = isAvatarId.id;
                    console.log(foto_id);
                        
                    await api.post(`/avatar/${foto_id}`, data);
                    return handlerNavigateToLoginPages();                                  
             }
         }).catch(() => {            
             
           return Alert.alert(
                'Erro no Cadastro',
                'Ocorreu um erro ao fazer Cadastro, tente novamente.',
            );   
         })                      
    };

    return (        
        <View style={styles.containerMain}>
            <PageHeader 
                title={`Que incrível que você quer dar aulas.`}
                titleHeader="Dar aulas"
                subTitle="O primeiro passo, é preencher esse formulário de inscrição."
                subTitleStyle={styles.subTitle}
                titleStyle={styles.title}
                styleHeader={styles.header}               
            >
            </PageHeader>
           
            <ScrollView
                style={styles.teacherList}
                scrollEnabled={true}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}                
            >
                <View style={styles.container}>
                    <View style={styles.section}>                       
                        <Text style={styles.titleSection}> Seus dados</Text>
                        <View  style={styles.titleSectionLine}/>                        
                    </View>

                    <RectButton style={styles.profile} onPress={handlePickImage}>

                    {image ? (
                        <Image source={{uri: image}} style={styles.avatar}/>
                     ) : (
                        <View style={styles.avatarUpload}>
                            <Text style={styles.textUpload}>Avatar</Text>                         
                        </View>
                     )}
                    
                     <Image source={iconUpload} style={styles.iconUpload} />

                    </RectButton>

                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <Input 
                          styleContainer={styles.inputContainer}
                          autoCapitalize="words"
                          returnKeyType="next"
                          value={name}
                          onChangeText={(state) => setName(state)}
                          inputRef={nameRef}
                          onSubmitEditing={() => {
                              whatRef.current?.focus()
                          }}
                        />

                        <Text style={styles.label}>Whatsapp</Text>
                        <InputMask
                          styleContainer={styles.inputContainer}                         
                          returnKeyType="next"
                          autoCompleteType="tel"
                          keyboardType="phone-pad"
                          value={whatsapp}
                          mask="phone"                          
                          inputMaskChange={(state: string) => setWhatsapp(state)}
                          inputRef={whatRef}
                          onSubmitEditing={() => {
                              bioRef.current?.focus()
                          }}
                        />

                        <Text style={styles.label}>Bio</Text>                        
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"                          
                                numberOfLines={10}
                                multiline={true}
                                textAlignVertical="top"
                                value={bio}
                                onChangeText={(state) => setBio(state)}
                                ref={bioRef}
                                autoCapitalize="words"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    subjectref.current?.focus()
                                }}
                            />
                        </View>

                        <View style={styles.sectionOn}>                       
                            <Text style={styles.titleSection}> Sobre a aula</Text>
                            <View  style={styles.titleSectionLine}/>                        
                        </View>

                        <Text style={styles.label}>Matéria</Text>
                        <Input 
                            styleContainer={styles.inputContainer}
                            value={subject}
                            onChangeText={(state) => setSubject(state)}
                            autoCapitalize="words"
                            returnKeyType="next"
                            inputRef={subjectref}
                            onSubmitEditing={() => {
                                costRef.current?.focus()
                            }}
                        />

                        <Text style={styles.label}>Custo da sua hora por aula</Text>
                        <InputMask
                            styleContainer={styles.inputContainer}
                            value={isCost}
                            mask="currency"
                            inputMaskChange={(state: string) => setCost(state)}
                            returnKeyType="next"
                            inputRef={costRef}                           
                        />

                        <View style={styles.sectionOn}>
                            <View style={styles.sectionContent}>
                                    <Text style={styles.titleSection}> Horários disponíveis</Text>                                    
                                    <RectButton style={styles.sectionButtonAdd}>
                                        <Image source={iconAdd} style={{marginRight: 4}}/>
                                        <Text style={styles.sectionButtonText}>Novo</Text>                                  
                                    </RectButton>
                            </View>                      
                            <View  style={styles.titleSectionLine}/>                        
                        </View>
                        <ListItem 
                            selectedValue={week_day}
                            onValueChange={(itemValue, itemIndex) => setWeek_day(itemValue as string)}
                            isAte={isTo}
                            isDas={isFrom}
                            inputMaskChangeIsAte={((state: string) => setIsTo(state))}
                            inputMaskChangeIsDas={((state: string) => setFrom(state))}
                        />
                        
                        </View>
                </View>
                <View style={styles.footer}>
                    <Button stylesButton={styles.button} onPress={handleSumit}>
                        Salvar cadastro
                    </Button>

                    <View style={styles.footerSection}>
                         <Image source={iconImportant} /> 
                        <View style={styles.footerMessage}>
                            <Text style={styles.textPrimary}>Importante!</Text>
                            <Text style={styles.textSegundary}>Preencha todos os dados</Text>
                        </View>
                    </View>
                </View>                             
            </ScrollView>            
        </View>        
    );
}

export default GiveClasses;