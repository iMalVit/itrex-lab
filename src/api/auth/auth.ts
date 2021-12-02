import { getToken } from "../../store/token";
import { api } from "../api";
import { LoginDataType, LoginResponseType, ProfileResponseType, RegisterDataType } from "./auth.types";


export const signUp = (userData: RegisterDataType) =>
  api
    .post<LoginResponseType>("auth/registration", userData)
    // .then((response) => ({ response }))
    // .catch((error) => ({ error }));

export const signIn = (userData: LoginDataType) =>
  api
    .post<LoginResponseType>("auth/login", userData)
    // .then((response) => ({ response }))
    // .catch((error) => ({ error }));

export const getUserProfile = () =>
  api
    .get<ProfileResponseType>("auth/profile", {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    })
    // .then((response) => ({ response }))
    // .catch((error) => ({ error }));



 api.interceptors.request.use(async request => {
     console.log('pgg')
    request.headers = { 
        'Authorization': `Bearer ${getToken()}`,
      }
        return request;
      });