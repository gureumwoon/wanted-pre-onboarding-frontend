import axios, { AxiosInstance } from "axios";
import { UserRequest } from "../types/User";

export const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
    },
});


api.interceptors.request.use((config: any) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken && config.headers) {
        config.headers.common["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
});


export const apis = {
    // user
    signUp: (data: UserRequest) => api.post("/auth/signup", data),
    signIn: (data: UserRequest) => api.post("/auth/signin", data),
}