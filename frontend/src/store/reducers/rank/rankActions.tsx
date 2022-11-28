import {IRankResponse} from "../../../models/IRankResponse";
import {rankActions, rankActionsType, setError, setIsLoading, setRank} from "./types";
import {Dispatch} from "redux";
import rankService from "../../../API/rankService";


const setRanksResponseAction = (ranks: IRankResponse[]): setRank => {
    return {
        type: rankActionsType.SET_RANK,
        payload: ranks
    }
}


const setIsLoadingAction = (isLoading: boolean): setIsLoading => {
    return {
        type: rankActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setErrorAction = (error: string): setError => {
    return {
        type: rankActionsType.SET_ERROR,
        payload: error
    }
}

export function fetchRanksOfNames (token: string | undefined) {
    return async (dispatch: Dispatch<rankActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await rankService.listOfRanks(token)
            dispatch(setRanksResponseAction(response.data))
        }
        catch (e : any) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchUpdateRank(rank:IRankResponse[], token: string | undefined) {
    return (dispatch: Dispatch<rankActions>) => {
        try{
            dispatch(setIsLoadingAction(true))
            const response = rankService.updateRank(rank,token)
        }catch(e : any) {
            dispatch((setErrorAction((e as Error).toString())))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function setRanksOfNames (data: IRankResponse[]) {
    return async (dispatch: Dispatch<rankActions>) => {
        dispatch(setRanksResponseAction(data))
    }
}