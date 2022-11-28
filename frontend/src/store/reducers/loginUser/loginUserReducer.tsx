import {loginUserActions, loginUserActionsType, loginUserState} from "./types";

const initialState: loginUserState = {
    loginResponse: null,
    isLoading: false,
    isAuth: false,
    Error: null,
}

export const loginUserReducer = (state = initialState, action: loginUserActions):loginUserState => {
    switch (action.type){
        case loginUserActionsType.SET_LOGIN_RESPONSE: {
            return {...state, loginResponse: action.payload}
            break;
        }
        case loginUserActionsType.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
            break;
        }
        case loginUserActionsType.SET_IS_AUTH: {
            return {...state, isAuth: action.payload}
            break;
        }
        case loginUserActionsType.SET_ERROR:{
            return {...state, Error: action.payload}
            break;
        }
        default:{
            return state
        }
    }
}