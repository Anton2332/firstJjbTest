import {rankActions, rankActionsType, rankState} from "./types";
import {nameActionsType} from "../name/types";

const initialState: rankState = {
    rank: [],
    isLoading: false,
    Error: null,
}

export const rankReducer = (state = initialState, action: rankActions): rankState => {
    switch (action.type){
        case rankActionsType.SET_RANK: {
            return {...state, rank: action.payload}
            break;
        }
        case rankActionsType.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
            break;
        }
        case rankActionsType.SET_ERROR: {
            return {...state, Error: action.payload}
            break;
        }
        default:{
            return state
        }
    }
}