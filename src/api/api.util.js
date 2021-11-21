import { api } from "./api";

export const register = (userData) => api.post("auth/registration", userData);

export const login = (userData) => api.post("auth/login", userData);

export const getUserProfile = (accessToken) =>
  api.get("auth/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getDoctorsSpecializations = () => api.get("specializations");

export const getDoctorsBySpezialisation = (specializationId) =>
  api.get(`doctors/specialization/${specializationId}`);

export const getAvailableTime = (date, doctorId) =>
  api.get("appointments/time/free", {
    params: {
      date: date,
      doctorId: doctorId,
    },
  });
