import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../common/constants';
import api from '../api';
import ENDPOINTS from '../endpoints';
import { AppointmentsResponseType, AppointmentDataType } from './appointments.types';

export const fetchAllPatientAppointments = (
  offset: number = DEFAULT_OFFSET,
  limit: number = DEFAULT_LIMIT,
) => api
  .get<AppointmentsResponseType>(ENDPOINTS.appointmentsPatientMe(), {
    params: {
      offset,
      limit,
    },
  });
export const fetchAllDoctorAppointments = (
  offset: number = DEFAULT_OFFSET,
  limit: number = DEFAULT_LIMIT,
) => api
  .get(ENDPOINTS.appointmentsDoctorMe(), {
    params: {
      offset,
      limit,
    },
  });

export const makeAppointment = (data: AppointmentDataType) => api
  .post(ENDPOINTS.appointments(''), data, {});

export const deleteAppointmentByDoctor = (id: string) => api
  .delete(ENDPOINTS.appointments(id));

export const fetchAvailableTime = (date: string, doctorID: string) => api
  .get(ENDPOINTS.appointmentsTimeFree(), {
    params: {
      date,
      doctorID,
    },
  });
