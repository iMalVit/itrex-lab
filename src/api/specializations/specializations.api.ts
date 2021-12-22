import api from '../api';
import ENDPOINTS from '../endpoints';

export const fetchDoctorsSpecializations = () => api.get(ENDPOINTS.specializations());
