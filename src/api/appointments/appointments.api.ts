import api from '../api';
import {
  AppointmentsResponseType,
} from './appointments.types';

const OFFSET = 0;
const LIMIT = 100;

const URL = {
  appointmentsPatientMe: () => '/appointments/patient/me',
  appointmentsDoctorMe: () => '/appointments/doctor/me',
  appointments: (id: string) => `/appointments/${id}`,
};

export const getAllPatientAppointments = () => api
  .get<AppointmentsResponseType>(URL.appointmentsPatientMe(), {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });
export const getAllDoctorAppointments = () => api
  .get(URL.appointmentsDoctorMe(), {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export const makeAppointment = (data: any) => api
  .post('appointments', data, {});

export const deleteAppointmentByDoctor = (id: string) => api.delete(URL.appointments(id));

export const getAvailableTime = (date: any, doctorId: any) => api
  .get('appointments/time/free', {
    params: {
      date,
      doctorId,
    },
  });
