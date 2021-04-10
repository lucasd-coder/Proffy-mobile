import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (key: string) => {
  try {
     const value = await AsyncStorage.getItem(
        key
       );
      if (value != null) {
        return value
      }
      return '';
    
  } catch (error) {
    return '';
  }
};

export const setData = async (key: string, token: string) => {
   try { 
       
    await AsyncStorage.setItem(key, token )
   } catch (error) {

     console.log('AsyncStorage error during token store:', error);
   }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);    

  } catch (error) {
    console.log(error);    
  }
}

