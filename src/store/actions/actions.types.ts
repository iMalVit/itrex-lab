import { LoginDataType, LoginResponseType, RegisterDataType } from '../../api/auth/auth.types';
import { NewAppointmentResponseType } from '../../api/appointments/appointments.types';

export type LoginPendingType = LoginDataType
export type LoginSuccessType = LoginResponseType;

export type RegistrationPendingType = RegisterDataType;
export type RegistrationSuccessType = LoginResponseType;

export type AppointmentPendingType = {
  date: string
  reason: string
  note: string
  doctorID: string
};
export type AppointmentFulfilledType = NewAppointmentResponseType;
