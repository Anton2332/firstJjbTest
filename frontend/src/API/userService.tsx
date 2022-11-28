import { IUserLoginResponse } from "../models/IUserLoginResponse";
import $api from './axios';
import {IUserLoginRequest} from "../models/IUserLoginRequest";
import {IUserRegisterRequest} from "../models/IUserRegisterRequest";
import {IUserRegisterResponse} from "../models/IUserRegisterResponse";
import {IUserRefreshResponse} from "../models/IUserRefreshResponse";

export default class userService{

    static async loginUser(user: IUserLoginRequest){
        const response = await $api.post<IUserLoginResponse>('login/',user);
        return response;
    }

    static async registerUser(user: IUserRegisterRequest){
        const response = await $api.post<IUserRegisterResponse>('register/', user)
        return response;
    }

    static async verifyToken(token: string){
        const response = await $api.post('token/verify/',{
            token:token
        });
        return response;
    }

    static async refreshToken(refresh: string){
        const response = await $api.post<IUserRefreshResponse>('users/token/refresh', {
            refresh: refresh
        });
        return response;
    }
}
