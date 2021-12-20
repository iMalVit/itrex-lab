import api from '../api';
import ENDPOINTS from '../enpoints';

export const fetchDoctorsSpecializations = () => api.get(ENDPOINTS.specializations());
