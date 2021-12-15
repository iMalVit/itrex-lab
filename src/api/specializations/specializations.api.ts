/* eslint-disable import/prefer-default-export */
import api from '../api';

const URL = {
  specializations: () => '/specializations',
};

export const getDoctorsSpecializations = () => api.get(URL.specializations());
