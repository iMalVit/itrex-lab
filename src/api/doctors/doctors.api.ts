import api from '../api';
import ENDPOINTS from '../endpoints';

export const fetchDoctorsBySpecialization = (id: string) => api
  .get(ENDPOINTS.doctorsSpecialization(id));
