import axios from 'axios';
import { getToken } from '../store/token';

const api = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

api.interceptors.request.use(async (request) => {
  request.headers = {
    Authorization: `Bearer ${getToken()}`,
  };
  return request;
});

export default api;
