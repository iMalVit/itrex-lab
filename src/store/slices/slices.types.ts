export interface Request {
  status: 'idle' | 'loading' | 'failed' | 'success';
}
export interface LoginState extends Request {
  isLogged: boolean
}
export interface ProfileStateType extends Request {
  data: {
    id: string
    first_name: string
    last_name: string
    photo: string
    role_name: string
  },
}
export interface AppointmentsStateType extends Request {
  appointments: any[]

}
export interface ResolutionsStateType extends Request {
  resolutions: any[]

}
export interface SpecializationsState extends Request {
  specializations: any[],
}
export interface DoctorsPerSpecializationState extends Request {
  doctors: any[],
}
export interface AvailableTimeState extends Request {
  time: any,
}
