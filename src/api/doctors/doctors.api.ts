/* eslint-disable import/prefer-default-export */
import api from '../api';
import ENDPOINTS from '../enpoints';

export const getDoctorsBySpecialization = (id:string) => api.get(ENDPOINTS.doctorsSpecialization(id));
