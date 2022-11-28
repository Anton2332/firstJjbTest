import {INameResponse} from "../../../models/INameResponse";
import {IRankResponse} from "../../../models/IRankResponse";


export interface rankState {
    rank: IRankResponse[]
    isLoading: boolean,
    Error: string | null
}

export enum rankActionsType {
    SET_RANK = 'RANK/SET_RANK',
    SET_IS_LOADING = 'RANK/SET_IS_LOADING',
    SET_ERROR = 'RANK/SET_ERROR',
}

export interface setRank{
    type:rankActionsType.SET_RANK,
    payload: IRankResponse[]
}

export interface setIsLoading {
    type: rankActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setError {
    type: rankActionsType.SET_ERROR,
    payload: string | null
}

export type rankActions = setError
    | setRank
    | setIsLoading;