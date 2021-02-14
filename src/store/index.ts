import { createStore, applyMiddleware} from 'redux';
import Reactotron, {ReactotronReactNative} from 'reactotron-react-native';


import rootReducer from './modules/rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';


const sagaMonitor = Reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor});


const store = createStore(    
    rootReducer, 
        applyMiddleware(sagaMiddleware)       
);

sagaMiddleware.run(rootSaga);

export default store;

