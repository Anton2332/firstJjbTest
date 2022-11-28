import {nameActions, nameActionsType, nameState} from "./types";

const initialState: nameState = {
    name: {
        id:0,
        name: ""
    },
    isLoading: false,
    Error: null,
}

export const nameReducer = (state = initialState, action:nameActions):nameState => {
    switch (action.type){
        case nameActionsType.SET_NAME: {
            return {...state, name: action.payload}
            break;
        }
        case nameActionsType.SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
            break;
        }
        case nameActionsType.SET_ERROR: {
            return {...state, Error: action.payload}
            break;
        }
        default:{
            return state
        }
    }
}