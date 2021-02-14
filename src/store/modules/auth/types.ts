export enum ActionTypes {
    botaoclicadosucess = 'BOTAO_CLICADO_SUCCESS',
    botaoclicadorequest = 'BOTAO_CLICADO_REQUEST',
    botaoclicadofailure = 'BOTAO_CLICADO_FAILURE',
    loginrequest = 'LOGIN_REQUEST',
    loginsuccess = 'LOGIN_SUCCESS',
    loginfailure = 'LOGIN_FAILURE',
    registerrequest = 'REGISTER_REQUEST',
    registerfailure = 'REGISTER_FAILURE',
    registerupdatedsuccess = 'REGISTER_UPDATED_SUCCESS',
    registercreatedsuccess = 'REGISTER_CREATED_SUCCESS'
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

