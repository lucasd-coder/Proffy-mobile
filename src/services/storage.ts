import AsyncStorage from '@react-native-community/async-storage';

export const getData = async () => {
  try {
     const value = await AsyncStorage.multiGet([
        '@Proffy:token',
        '@Proffy:user',
      ]);
      if (value != null) {
        return value
      }
      return '';
    
  } catch (error) {
    return '';
  }
};

export const signOut = async () => {
  await AsyncStorage.multiRemove(['@GoBarber:user', '@GoBarber:token']);
}

