import AsynsStorage from '@react-native-community/async-storage';

async function loadStoragedData() {
    const data = await AsynsStorage.multiGet([
      '@Proffy:token',
      '@Proffy:user',
    ]);
    if(data === null) {
        return null;
    }else {
        return data;
    }
}

const signOut = async () => {
    await AsynsStorage.multiRemove(['@GoBarber:user', '@GoBarber:token']);
   
}

export { loadStoragedData, signOut };

