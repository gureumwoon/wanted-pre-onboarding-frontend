import axios, { AxiosInstance } from "axios";
import { UserRequest } from "../types/User";
import { Todo, TodoUpdateRequest } from "../types/TodoType";

export const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
    },
});


api.interceptors.request.use((config: any) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken !== undefined) {
        config.headers["authorization"] = accessToken ? `Bearer ${accessToken}` : "";
    }
    return config;
});


export const apis = {
    // user
    signUp: (data: UserRequest) => api.post("/auth/signup", data),
    signIn: (data: UserRequest) => api.post("/auth/signin", data),
    // todo
    createTodo: (data: Todo) => api.post("/todos", data),
    getTodo: () => api.get("/todos"),
    updateTodo: (id: number, data: TodoUpdateRequest) => api.put(`/todos/${id}}`, data),
    deleteTodo: (id: number) => api.delete(`/todos/${id}`)
}