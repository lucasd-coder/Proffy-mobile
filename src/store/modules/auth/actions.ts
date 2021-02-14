import { ActionTypes, IRequestLogin, IRequestRegister} from './types';



export function loginRequest(payload: IRequestLogin) {
 return {
    type: ActionTypes.loginrequest,
    payload
  }
}
export function loginSuccess(payload: any) {
  return {
    type: ActionTypes.loginsuccess,
    payload,
  };
}
export function loginFailure(payload: any) {
  return {
    type: ActionTypes.loginfailure,
    payload,
  };
}
export function registerRequest(payload: IRequestRegister) {
  return {
    type: ActionTypes.registerrequest,
    payload,
  };
}

export function registerCreatedSuccess(payload: any) {
  return {
    type: ActionTypes.registercreatedsuccess,
    payload,
  };
}

export function registerFailure(payload : any) {
  return {
    type: ActionTypes.registerfailure,
    payload,
  };
}
