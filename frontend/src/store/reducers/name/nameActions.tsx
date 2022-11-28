import {INameResponse} from "../../../models/INameResponse";
import {nameActions, nameActionsType, setError, setIsLoading, setName} from "./types";
import {Dispatch} from "redux";
import nameService from "../../../API/nameService";

const setNameResponseAction = (name: INameResponse | null) : setName => {
    return {
        type: nameActionsType.SET_NAME,
        payload: name
    }
}

const setIsLoadingAction = (isLoading: boolean): setIsLoading => {
    return {
        type: nameActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setErrorAction = (error: string): setError => {
    return {
        type: nameActionsType.SET_ERROR,
        payload: error
    }
}

export function fetchCreateName(name: string, token:string | undefined){
    return async (dispatch: Dispatch<nameActions>) => {
        try{
            dispatch(setIsLoadingAction(true))
            const response = await nameService.createName(name, token)
            dispatch((setNameResponseAction(response.data)))
        }
        catch (e : any) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchUpdateName(id:number, name: string, token:string| undefined){
    return async (dispatch: Dispatch<nameActions>) => {
        try{
            dispatch(setIsLoadingAction(true))
            const response = await nameService.updateName(id, name, token)
            dispatch((setNameResponseAction(response.data)))
        }
        catch (e : any) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchDeleteName(id:number, token:string| undefined){
    return async (dispatch: Dispatch<nameActions>) => {
        try{
            dispatch(setIsLoadingAction(true))
            await nameService.deleteName(id, token)
            dispatch((setNameResponseAction(null)))
        }
        catch (e : any) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}