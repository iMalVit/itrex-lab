import api from '../api';

const OFFSET = 0;
const LIMIT = 100;

const URL = {
  resolutions: () => '/resolutions',
  resolutionsDoctorMe: () => '/resolutions/doctor/me',
};

const getAllDoctorsResolutions = () => api
  .get(URL.resolutionsDoctorMe(), {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export const makeResolution = (data: any) => api
  .post(URL.resolutions(), data);

export default getAllDoctorsResolutions;
