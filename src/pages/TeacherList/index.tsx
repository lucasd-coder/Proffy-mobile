import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStore from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import find from '../../assets/images/encontrado.png';
import vector from '../../assets/images/icons/vector.png';
import notVector from '../../assets/images/icons/visibleFilter.png';

import styles from './styles';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [totalProffys, setTotalProffys] = useState(Number);    
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
           
    useEffect(() => {
        api.get('proffys')
          .then((response) => {
          setTotalProffys(response.headers['x-total-count']);
        })        
    }, []);

    function loadFavorites() {
        AsyncStore.getItem('favorites').then((response) => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeachersId);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });


    function handlerToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handlerFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);

    }
    
    return (       
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                titleHeader="Estudar"                              
                headerRight={(
                     <>                        
                        <View style={styles.containerFind}>                            
                                <Image source={find} style={styles.find}/>
                                <Text style={styles.totalProffy}> {`${totalProffys}  proffys`} </Text>
                        </View>
                        <View style={styles.containerFilter} >
                             <BorderlessButton onPress={handlerToggleFiltersVisible}> 
                                <Feather name="filter" size={20} color='#04D361' />
                             </BorderlessButton> 

                            <Text style={styles.textFilter}>Filtrar por dia, hora e matéria</Text>
                            <Image source={isFiltersVisible ? notVector : vector} style={styles.imageFilterVisible}/>
                            <View style={styles.filterLine}/>                                                        
                        </View>
                     </>                     
                 )}

            >
                {isFiltersVisible && (
                 <>
                   
                
                    <View style={[styles.searchForm]}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={(text) => setWeek_day(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />

                            </View>

                            <View style={[styles.inputBlock, { marginTop: 20 }]}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />

                            </View>
                        </View>
                        <RectButton onPress={handlerFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtar</Text>
                        </RectButton>
                    </View>
                  
                 </>
                )}
            </PageHeader>                   

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                 {teachers.map((teacher: Teacher) => {
                     
                    return <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />                     
                                                                                           
                })}             
            </ScrollView>
        </View >       
    );
}

export default TeacherList;