import { AnyAction } from "redux";
import { ActionTypes } from './types';
import produce from 'immer';
import api from '../../../services/api';

const initialState = {
    token: '',
    user: {},
    isLoggedIn: false,
    error: false,
}

export default function Auth(state = initialState, action: AnyAction)  {
    return produce(state,  draft => {
    switch (action.type) {
        case ActionTypes.loginsuccess: {
            draft.token = action.payload.token;
            draft.user = action.payload.user;
            draft.isLoggedIn = true;
            draft.error = false;
            break;
        }

        case ActionTypes.loginfailure: {
            delete api.defaults.headers.Authorization;
            draft.error = action.payload.error;
            break;
        }

        case ActionTypes.loginrequest:  {
            draft.error = true;          
            break;
        }

        case ActionTypes.registercreatedsuccess: {
            draft.user = action.payload.user;
            draft.error = false;            
            break;
        }

        case ActionTypes.registerfailure: {
            draft.error = action.payload.error;
            break;
        }

        case ActionTypes.registerrequest: {
            draft.error = true;
            break;
        }
        case ActionTypes.logout: {
            delete api.defaults.headers.Authorization;
            draft.isLoggedIn = false;
            draft.error = false;
            break;
        }

        default: {
            state;
        } 
    }
  });
}



