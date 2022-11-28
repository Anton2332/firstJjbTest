import $api from "./axios";
import {INameResponse} from "../models/INameResponse";

export default class nameService {
    static async createName(name: string, token: string | undefined){
        const response = await $api.post<INameResponse>('names/',{
            name:name
        },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return response;
    }

    static async updateName(id: number, name:string, token: string | undefined){
        const response = await $api.put<INameResponse>('names/' + id + '/', {
            name:name
        },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return response
    }

    static async deleteName(id: number, token: string | undefined) {
        const response = await $api.delete('names/' + id + '/',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return response
    }
}