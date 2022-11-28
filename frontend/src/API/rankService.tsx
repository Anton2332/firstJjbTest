import $api from "./axios";
import {IRankResponse} from "../models/IRankResponse";


export default class rankService{
    static async listOfRanks(token:string | undefined){
        const response = await $api.get<IRankResponse[]>('rankOfNames/',
            {
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return response
    }

    static async updateRank(ranks:IRankResponse[], token:string | undefined){
        const response = await $api.put<IRankResponse[]>(`updateRank/`,
            ranks.map(rank => {
                return {
                    id:rank.id,
                    rankNumber: rank.rankNumber,
                    name: rank.name.id
                }
                }
            ),
            {
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
        return response
    }
}