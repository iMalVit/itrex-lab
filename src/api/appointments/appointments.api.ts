import api from '../api';
import {
  AppointmentsResponseType,
} from './appointments.types';

const OFFSET = 0;
const LIMIT = 100;

const URL = {
  appointmentsPatientMe: () => '/appointments/patient/me',
  appointments: (id: string) => `/appointments/${id}`,
};

const getAllPatientAppointments = () => api
  .get<AppointmentsResponseType>(URL.appointmentsPatientMe(), {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export const deleteAppointmentByDoctor = (id: string) => api.delete(URL.appointments(id));

export default getAllPatientAppointments;
