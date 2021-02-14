import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga'


Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(sagaPlugin())
  .useReactNative() 
  .connect() 