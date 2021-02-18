import { createStore, applyMiddleware, compose} from 'redux';
import Reactotron from 'reactotron-react-native';
import ReactotronConfig from '../../ReactotronConfig';


import rootReducer from './modules/rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';



const sagaMonitor = Reactotron.createSagaMonitor!();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(    
    rootReducer, 
    compose(
        middleware,
        ReactotronConfig.createEnhancer!(),
    ),              
);

sagaMiddleware.run(rootSaga);

export default store;

