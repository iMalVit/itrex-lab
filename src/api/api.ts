import axios from 'axios';
import { config } from '../config/config';
import { getAccessToken } from '../store/token';

const api = axios.create({
  baseURL: config.api.basePath,
});

api.interceptors.request.use(async (request) => {
  request.headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  return request;
});

export default api;
