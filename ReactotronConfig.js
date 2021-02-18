import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux} from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';



const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(sagaPlugin())
  .use(reactotronRedux())  
  .connect()

  export default reactotron;
