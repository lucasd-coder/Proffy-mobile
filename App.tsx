import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/services/RootNavigation';

import store from './src/store';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from './src/routes';

if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {

  let [fontsLoading] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoading) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer  ref={navigationRef} >
          <StatusBar style="light" />          
          <Routes />               
        </NavigationContainer>
      </Provider>

    );
  }

}

