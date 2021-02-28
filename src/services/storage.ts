import AsyncStorage from '@react-native-community/async-storage';

export const getData = async () => {
  try {
     const value = await AsyncStorage.getItem(
        '@Proffy:token'
       );
      if (value != null) {
        return value
      }
      return '';
    
  } catch (error) {
    return '';
  }
};

export const signIn = async (token: any) => {
   try { 
       
    await AsyncStorage.setItem('@Proffy:token', token )
   } catch (error) {

     console.log('AsyncStorage error during token store:', error);
   }
}

export const signOut = async () => {
  try {
    await AsyncStorage.removeItem('@Proffy:token');    

  } catch (error) {
    console.log(error);    
  }
}

