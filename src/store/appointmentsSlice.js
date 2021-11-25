import { createSlice, createAction } from "@reduxjs/toolkit";

export const getPatientAppointmentsRequest = createAction(
  "getPatientAppointments/request"
);

export const getPatientAppointmentsSuccess = createAction(
  "getPatientAppointments/success"
);

export const getPatientAppointmentsFailed = createAction(
  "getPatientAppointments/failed"
);

export const getDoctorAppointmentsRequest = createAction(
  "getDoctorAppointments/request"
);
export const getDoctorAppointmentsSuccess = createAction(
  "getDoctorAppointments/success"
);
export const getDoctorAppointmentsFailed = createAction(
  "getDoctorAppointments/failed"
);

export const createAnAppointmentRequest = createAction(
  "postAnAppointment/request"
);
export const createAnAppointmentSuccess = createAction(
  "postAnAppointment/success"
);
export const createAnAppointmentFailed = createAction(
  "postAnAppointment/failed"
);

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
  },
  reducers: {
    setUserAppointments: function ({ appointments }, { payload }) {
      return {
        appointments: [...payload],
      };
    },
  },
});

export default appointmentsSlice;
export const { setUserAppointments } = appointmentsSlice.actions;
