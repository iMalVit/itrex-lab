import axios from 'axios';
import { getToken } from '../store/token';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(async (request) => {
  request.headers = {
    Authorization: `Bearer ${getToken()}`,
  };
  return request;
});

export default api;
