export interface LoginState {
  status: 'idle' | 'loading' | 'failed' | 'success';
  isLogged: boolean
}
export interface RegistrationState {
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface CreateAppointmentState {
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface ProfileStateType {
  data: {
    id: string
    first_name: string
    last_name: string
    photo: string
    role_name: string
  },
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface AppointmentsStateType {
  appointments: any
  status: 'idle' | 'loading' | 'failed' | 'success';

}
export interface SpecializationsState {
  specializations: any[],
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface DoctorsPerSpecializationState {
  doctors: any,
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface AvailableTimeState {
  time: any,
  status: 'idle' | 'loading' | 'failed' | 'success';
}
