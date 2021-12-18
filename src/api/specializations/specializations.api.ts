/* eslint-disable import/prefer-default-export */
import api from '../api';
import ENDPOINTS from '../enpoints';

export const getDoctorsSpecializations = () => api.get(ENDPOINTS.specializations());
