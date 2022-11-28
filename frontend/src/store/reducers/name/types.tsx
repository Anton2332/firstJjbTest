import {loginUserActionsType} from "../loginUser/types";
import {INameResponse} from "../../../models/INameResponse";


export interface nameState {
    name: INameResponse | null
    isLoading: boolean,
    Error: string | null
}

export enum nameActionsType {
    SET_NAME = 'NAME/SET_NAME',
    SET_IS_LOADING = 'NAME/SET_IS_LOADING',
    SET_ERROR = 'NAME/SET_ERROR',
}

export interface setName{
    type:nameActionsType.SET_NAME,
    payload: INameResponse | null
}

export interface setIsLoading {
    type: nameActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setError {
    type: nameActionsType.SET_ERROR,
    payload: string | null
}

export type nameActions = setError
                        | setName
                        | setIsLoading;
