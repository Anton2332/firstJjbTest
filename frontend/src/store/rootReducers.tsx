import {combineReducers} from "redux";
import {loginUserReducer} from "./reducers/loginUser/loginUserReducer";
import {nameReducer} from "./reducers/name/nameReducer";
import {rankReducer} from "./reducers/rank/rankReducer";

export const rootReducers = combineReducers({
    loginUser:loginUserReducer,
    name:nameReducer,
    rank: rankReducer,
})

export type rootState = ReturnType<typeof rootReducers>