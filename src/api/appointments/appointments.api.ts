import api from '../api';
import {
  AppointmentsResponseType,
} from './appointments.types';

const OFFSET = 0;
const LIMIT = 100;

const getAllPatientAppointments = () => api
  .get<AppointmentsResponseType>('/appointments/patient/me', {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export default getAllPatientAppointments;
