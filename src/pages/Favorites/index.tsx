import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStore from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import iconFavorito from '../../assets/images/icons/favorito.png';

import styles from './styles';

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStore.getItem('favorites').then((response) => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }
    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader 
              title="Meus proffys Favoritos" 
              headerRight={(
                <View style={styles.containerFind}>                            
                    <Image source={iconFavorito} style={styles.find}/>
                    <Text style={styles.totalProffy}> {` proffys`} </Text>
                </View>

              )}
              />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>

        </View >
    );

}

export default Favorites;