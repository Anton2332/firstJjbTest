import {IUserLoginResponse} from "../../../models/IUserLoginResponse";

export interface loginUserState{
    loginResponse: IUserLoginResponse | null,
    isLoading: boolean,
    isAuth: boolean,
    Error: string | null
}

export enum loginUserActionsType{
    SET_LOGIN_RESPONSE = 'LOGIN_USER/SET_LOGIN_RESPONSE',
    SET_IS_LOADING = 'LOGIN_USER/SET_IS_LOADING',
    SET_IS_AUTH = 'LOGIN_USER/SET_IS_AUTH',
    SET_ERROR = 'LOGIN_USER/SET_ERROR',
}

export interface setLoginResponse{
    type: loginUserActionsType.SET_LOGIN_RESPONSE,
    payload: IUserLoginResponse
}

export interface setIsLoading {
    type: loginUserActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setIsAuth {
    type: loginUserActionsType.SET_IS_AUTH,
    payload: boolean
}

export interface setError {
    type: loginUserActionsType.SET_ERROR,
    payload: string | null
}

export type loginUserActions = setLoginResponse
                                | setIsLoading
                                | setIsAuth
                                | setError;
