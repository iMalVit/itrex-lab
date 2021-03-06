const ENDPOINTS = {
  authRegistration: () => 'auth/registration',
  authLogin: () => 'auth/login',
  authProfile: () => 'auth/profile',
  appointmentsPatientMe: () => '/appointments/patient/me',
  appointmentsDoctorMe: () => '/appointments/doctor/me',
  appointments: (id?: string) => `/appointments/${id}`,
  appointmentsTimeFree: () => 'appointments/time/free',
  resolutions: () => '/resolutions',
  resolutionsDoctorMe: () => '/resolutions/doctor/me',
  resolutionsPatientMe: () => '/resolutions/patient/me',
  doctorsSpecialization: (id: string) => `/doctors/specialization/${id}`,
  specializations: () => '/specializations',
};

export default ENDPOINTS;
