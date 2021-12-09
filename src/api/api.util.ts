import api from './api';

const OFFSET = 0;
const LIMIT = 100;

export const getDoctorsSpecializations = () => api.get('specializations');

export const getDoctorsBySpecialization = (specializationId: string) => api
  .get(`doctors/specialization/${specializationId}`);

export const getAvailableTime = (date: any, doctorId: any) => api
  .get('appointments/time/free', {
    params: {
      date,
      doctorId,
    },
  });

export const getAllPatientAppointments = () => api
  .get('/appointments/patient/me', {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export const getAllDoctorAppointments = (token: string) => api
  .get('/appointments/doctor/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

export const makeAppointment = (data: any) => api
  .post('appointments', data, {});
