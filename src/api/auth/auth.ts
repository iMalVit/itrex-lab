import api from '../api';
import ENDPOINTS from '../enpoints';
import {
  LoginDataType, LoginResponseType, ProfileResponseType, RegisterDataType,
} from './auth.types';

export const signUp = (userData: RegisterDataType) => api
  .post<LoginResponseType>(ENDPOINTS.authRegistration(), userData);

export const signIn = (userData: LoginDataType) => api
  .post<LoginResponseType>(ENDPOINTS.authLogin(), userData);

export const fetchUserProfile = () => api
  .get<ProfileResponseType>(ENDPOINTS.authProfile());
