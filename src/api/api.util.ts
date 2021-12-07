import { api } from "./api";

const OFFSET = 0;
const LIMIT = 100;



export const getDoctorsSpecializations = () => api.get("specializations");

export const getDoctorsBySpezialisation = (specializationId:string) =>
  api.get(`doctors/specialization/${specializationId}`);

export const getAvailableTime = (date:any, doctorId:any) =>
  api.get("appointments/time/free", {
    params: {
      date: date,
      doctorId: doctorId,
    },
  });

export const getAllPatientAppointments = () =>
  api
    .get("/appointments/patient/me", {
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

export const getAllDoctorAppointments = (token: string) =>
  api
    .get("/appointments/doctor/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        offset: OFFSET,
        limit: LIMIT,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const makeAnAppointment = (data: any) =>
  api
    .post("appointments", data, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
    // .then((response) => ({ response }))
    // .catch((error) => ({ error }));
