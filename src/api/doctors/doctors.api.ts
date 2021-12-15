/* eslint-disable import/prefer-default-export */
import api from '../api';

const URL = {
  doctorsSpecialization: (id: string) => `/doctors/specialization/${id}`,
};

export const getDoctorsBySpecialization = (id:string) => api.get(URL.doctorsSpecialization(id));
