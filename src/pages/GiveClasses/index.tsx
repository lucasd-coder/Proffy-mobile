import React, { useState} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RectButton } from 'react-native-gesture-handler';

import avatar from '../../assets/images/avatar.jpg';
import iconImportant from '../../assets/images/icons/iconImportant.png';
import iconAdd from '../../assets/images/icons/add.png';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/Index';
import Button from '../../components/Button';

import { navigate } from '../../services/RootNavigation';

import styles from './styles';

function handlerNavigateToLoginPages() {
    navigate('concludedRegisterProffy');
}

function GiveClasses() {
    const [selectedValue, setSelectedValue] = useState(String || Number);

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

                    <View style={styles.profile}>
                        <Image 
                            source={avatar}                   
                            style={styles.avatar}              
                        />
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <Input styleContainer={styles.inputContainer}/>

                        <Text style={styles.label}>Whatsapp</Text>
                        <Input styleContainer={styles.inputContainer}/>

                        <Text style={styles.label}>Bio</Text>                        
                        <View style={styles.textAreaContainer} >
                            <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"                          
                            numberOfLines={10}
                            multiline={true}
                            textAlignVertical="top"

                            />
                        </View>

                        <View style={styles.sectionOn}>                       
                            <Text style={styles.titleSection}> Sobre a aula</Text>
                            <View  style={styles.titleSectionLine}/>                        
                        </View>

                        <Text style={styles.label}>Matéria</Text>
                        <Input styleContainer={styles.inputContainer}/>

                        <Text style={styles.label}>Custo da sua hora por aula</Text>
                        <Input styleContainer={styles.inputContainer}/>

                        <View style={styles.sectionOn}>
                            <View style={styles.sectionContent}>
                                    <Text style={styles.titleSection}> Horários disponíveis</Text>
                                    <RectButton style={styles.sectionButtonAdd}>
                                        <Image source={iconAdd}/>
                                        <Text style={styles.sectionButtonText}>Novo</Text>                                  
                                    </RectButton>
                            </View>                      
                            <View  style={styles.titleSectionLine}/>                        
                        </View>

                        <Text style={styles.label}>Dia da semana</Text>
                        <View style={styles.containerSelected}>
                                <Picker
                                    style={styles.selectedPicker}
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue as string)}
                                    dropdownIconColor="#9C98A6"
                                >
                                <Picker.Item label="" value="" />
                                <Picker.Item label="Segunda-feira" value="1"/>
                                <Picker.Item label="Terça-feira" value="2" />
                                <Picker.Item label="Quarta-feira" value="3" />
                                <Picker.Item label="Quinta-feira" value="4" />
                                <Picker.Item label="Sexta-feira" value="5" />
                            </Picker>
                        </View>
                        
                        <View style={styles.containerAvailableTime}>
                                <View>                                
                                    <Text style={styles.labelAvailableTime}>Das</Text> 
                                    <View style={styles.inputContainerAvailableTime}>
                                        <TextInput style={styles.inputAvailableTime}/>                    
                                    </View>
                                </View>

                                <View>                                
                                    <Text style={[styles.labelAvailableTime, { marginLeft: 10}]}>Até</Text> 
                                    <View style={[styles.inputContainerAvailableTime, { marginLeft: 10, marginRight: 10}]}>
                                        <TextInput style={styles.inputAvailableTime}/>                            
                                    </View>
                                </View>
                            </View>                        
                        </View>
                </View>
                <View style={styles.footer}>
                    <Button stylesButton={styles.button} onPress={handlerNavigateToLoginPages}>
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