import { getToken } from '../../store/token';
import api from '../api';
import {
  LoginDataType, LoginResponseType, ProfileResponseType, RegisterDataType,
} from './auth.types';

const URL = {
  authRegistration: () => 'auth/registration',
  authLogin: () => 'auth/login',
  authProfile: () => 'auth/profile',
};

export const signUp = (userData: RegisterDataType) => api
  .post<LoginResponseType>(URL.authRegistration(), userData);

export const signIn = (userData: LoginDataType) => api
  .post<LoginResponseType>(URL.authLogin(), userData);

export const getUserProfile = () => api
  .get<ProfileResponseType>(URL.authProfile());

api.interceptors.request.use(async (request) => {
  request.headers = {
    Authorization: `Bearer ${getToken()}`,
  };
  return request;
});
