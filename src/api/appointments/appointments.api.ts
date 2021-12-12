import api from '../api';
import {
  AppointmentsResponseType,
} from './appointments.types';

const OFFSET = 0;
const LIMIT = 100;

const URL = {
  appointmentsPatientMe: () => '/appointments/patient/me',
};

const getAllPatientAppointments = () => api
  .get<AppointmentsResponseType>(URL.appointmentsPatientMe(), {
    params: {
      offset: OFFSET,
      limit: LIMIT,
    },
  });

export default getAllPatientAppointments;
