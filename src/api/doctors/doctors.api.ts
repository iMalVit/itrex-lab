import api from '../api';
import ENDPOINTS from '../enpoints';

export const fetchDoctorsBySpecialization = (id: string) => api
  .get(ENDPOINTS.doctorsSpecialization(id));
