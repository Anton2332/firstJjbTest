import {INameResponse} from "./INameResponse";

export interface IRankResponse{
    id: number
    rankNumber:number
    name:INameResponse
}