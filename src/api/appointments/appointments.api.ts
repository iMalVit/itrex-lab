import { api } from '../api';
import {
  AppointmentDataType,
  AppointmentsResponseType,
  FreeTimeResponseType,
  NewAppointmentResponseType,
} from './appointments.types';




const OFFSET = 0;
const LIMIT = 100;

export const getAllPatientAppointments = () =>
  api
    .get<AppointmentsResponseType>("/appointments/patient/me", {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: {
        offset: OFFSET,
        limit: LIMIT,
      },
    })
    // .then((response) => ({ response }))
    // .catch((error) => ({ error }));


