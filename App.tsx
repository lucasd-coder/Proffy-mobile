import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import store from './src/store';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import MainRoutes from './src/routes/main.routes';


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
      <>
        <StatusBar style="light" />
        <Provider store={store}>
           <MainRoutes />
        </Provider>
      </>
    );
  }

}

