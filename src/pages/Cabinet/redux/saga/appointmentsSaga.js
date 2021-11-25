import { put, takeEvery, call } from "redux-saga/effects";

import { getToken } from "../../../../store/token";

import {
  getPatientAppointmentsRequest,
  getDoctorAppointmentsRequest,
  setUserAppointments,
  getDoctorAppointmentsSuccess,
  getPatientAppointmentsSuccess,
  getPatientAppointmentsFailed,
  getDoctorAppointmentsFailed,
  createAnAppointmentRequest,
  createAnAppointmentSuccess,
  createAnAppointmentFailed,
} from "../../../../store/appointmentsSlice";

import { statusMessageActions } from "../../../../store/statusMessageSlice";

import {
  getAllDoctorAppointments,
  getAllPatientAppointments,
  createAnAppointment,
} from "../../../../api/api.util";
import { useCreateAnAppointment } from "./useCreateAnAppointment";

export function* getAppointmentsWorker({ type, payload }) {
  let responce;
  let error;
  const token = getToken();
  console.log({ type, payload });

  switch (type) {
    case getDoctorAppointmentsRequest.type:
      const { responce: doctorResponce, error: doctorError } = yield call(
        getAllDoctorAppointments,
        [...payload, token]
      );
      responce = doctorResponce;
      error = doctorError;
      break;
    case getPatientAppointmentsRequest.type:
      const { responce: patientResponce, error: patientError } = yield call(
        getAllPatientAppointments,
        [...payload, token]
      );
      console.log(patientResponce);

      responce = patientResponce;
      error = patientError;
      break;
  }

  if (responce) {
    yield put(setUserAppointments(responce.data.appointments));
    switch (type) {
      case getPatientAppointmentsRequest.type:
        yield put(getPatientAppointmentsSuccess());
        yield put(statusMessageActions.setSuccessStatus());

        break;

      case getDoctorAppointmentsRequest.type:
        yield put(getDoctorAppointmentsSuccess());
        break;
    }
  } else {
    switch (type) {
      case getPatientAppointmentsRequest.type:
        yield put(getPatientAppointmentsFailed());
        break;

      case getDoctorAppointmentsRequest.type:
        yield put(getDoctorAppointmentsFailed());
        break;
    }
  }
}

export function* createAnAppointmentWorker(payload) {
  const token = yield getToken();
  console.log(token);
  console.log(payload);
  console.log([{ ...payload.payload }, token]);

  const { responce, error } = yield call(createAnAppointment, [
    { ...payload.payload },
    token,
  ]);

  if (responce) {
    yield put(createAnAppointmentSuccess());
    yield put(getPatientAppointmentsRequest([20, 0, getToken()]));
  }
  if (error) {
    yield put(createAnAppointmentFailed());
    yield put(statusMessageActions.setFailedStatus(error.message));
  }
}

export function* getAppointmentsWatcher() {
  yield takeEvery(getPatientAppointmentsRequest, getAppointmentsWorker);
  yield takeEvery(getDoctorAppointmentsRequest, getAppointmentsWorker);
}

export function* createAnAppointmentWatcher() {
  yield takeEvery(createAnAppointmentRequest, createAnAppointmentWorker);
}
