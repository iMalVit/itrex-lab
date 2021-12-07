import { getToken } from "../../store/token";
import { api } from "../api";
import { LoginDataType, LoginResponseType, ProfileResponseType, RegisterDataType } from "./auth.types";


export const signUp = (userData: RegisterDataType) =>
  api
    .post<LoginResponseType>("auth/registration", userData)

export const signIn = (userData: LoginDataType) =>
  api
    .post<LoginResponseType>("auth/login", userData)
  
export const getUserProfile = () =>
  api
    .get<ProfileResponseType>("auth/profile", {})



 api.interceptors.request.use(async request => {
    request.headers = { 
        'Authorization': `Bearer ${getToken()}`,
      }
        return request;
      });