import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../common/constants';
import api from '../api';
import ENDPOINTS from '../enpoints';

const fetchAllDoctorsResolutions = (offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT) => api
  .get(ENDPOINTS.resolutionsDoctorMe(), {
    params: {
      offset,
      limit,
    },
  });

export const makeResolution = (data: any) => api
  .post(ENDPOINTS.resolutions(), data);

export default fetchAllDoctorsResolutions;
