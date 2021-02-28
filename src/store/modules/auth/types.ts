export enum ActionTypes {
    loginrequest = 'LOGIN_REQUEST',
    loginsuccess = 'LOGIN_SUCCESS',
    loginfailure = 'LOGIN_FAILURE',
    registerrequest = 'REGISTER_REQUEST',
    registerfailure = 'REGISTER_FAILURE',
    registerupdatedsuccess = 'REGISTER_UPDATED_SUCCESS',
    registercreatedsuccess = 'REGISTER_CREATED_SUCCESS',
    logout = 'LOGOUT'
}


export interface IRequestLogin {
    email: string;
    password: string;
}

export interface IRequestRegister {
    surname: string
    name: string;
    email: string;
    password: string;
}

