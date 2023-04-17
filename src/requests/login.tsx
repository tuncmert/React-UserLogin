import axios from "axios";
import { apiUrl } from "./apiConfing";

export type LoginTypeModel = {
    userName: string,
    password: string
}


export const loginSubmit = (e: React.FormEvent<HTMLFormElement>, loginModel: LoginTypeModel) => {
    e.preventDefault();
    const promise = axios.get(`${apiUrl}/Auth?userName=${loginModel.userName}&password=${loginModel.password}`).then((response)=>response.data);
    return promise;
}
