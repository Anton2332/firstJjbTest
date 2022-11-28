import {IUserLoginResponse} from "../../../models/IUserLoginResponse";
import {loginUserActions, loginUserActionsType, setError, setIsAuth, setIsLoading, setLoginResponse} from "./types";
import {IUserLoginRequest} from "../../../models/IUserLoginRequest";
import {Dispatch} from "redux";
import userService from "../../../API/userService";
import useCookies from 'react-cookie'

const setUserResponseAction = (userResponse: IUserLoginResponse ): setLoginResponse => {
    return {
        type: loginUserActionsType.SET_LOGIN_RESPONSE,
        payload: userResponse
    }
}

const setIsLoadingAction = (isLoading: boolean): setIsLoading => {
    return {
        type: loginUserActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setIsAuthAction = (isAuth: boolean): setIsAuth => {
    return {
        type: loginUserActionsType.SET_IS_AUTH,
        payload: isAuth
    }
}

const setErrorAction = (error: string): setError => {
    return {
        type: loginUserActionsType.SET_ERROR,
        payload: error
    }
}

export function fetchLoginUser(user: IUserLoginRequest){
    return async (dispatch: Dispatch<loginUserActions>) => {
            try {
                dispatch(setIsLoadingAction(true))
                const response = await userService.loginUser(user)
                dispatch(setUserResponseAction(response.data))
                dispatch(setIsAuthAction(true))
            } catch (e: any) {
                dispatch(setErrorAction((e as Error).toString()))
            } finally {
                dispatch(setIsLoadingAction(false))
            }
        }

}

export function fetchLogoutUser(){
    return async (dispatch: Dispatch<loginUserActions>) => {
        dispatch(setIsAuthAction(false));

    }
}