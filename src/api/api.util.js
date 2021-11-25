import { api } from "./api";

export const register = (userData) =>
  api
    .post("auth/registration", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const login = (userData) =>
  api
    .post("auth/login", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getUserProfile = (accessToken) =>
  api
    .get("auth/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

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

export const getAllPatientAppointments = ([limit, offset, token]) =>
  api
    .get("/appointments/patient/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getAllDoctorAppointments = ([limit, offset, token]) =>
  api
    .get("/appointments/doctor/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const createAnAppointment = ([data, token]) =>
  api
    .post("appointments", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
