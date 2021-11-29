import { put, takeEvery, call } from "redux-saga/effects";

import { getToken } from "../../token";

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
} from "../../appointmentsSlice";

import { statusMessageActions } from "../../statusMessageSlice";

import {
  getAllDoctorAppointments,
  getAllPatientAppointments,
  createAnAppointment,
} from "../../../api/api.util";

export function* getAppointmentsWorker({ type, payload }) {
  let response;
  let error;
  const token = getToken();
  console.log({ type, payload });

  switch (type) {
    case getDoctorAppointmentsRequest.type:
      const { response: doctorResponse, error: doctorError } = yield call(
        getAllDoctorAppointments,
        token
      );
      response = doctorResponse;
      error = doctorError;
      break;
    case getPatientAppointmentsRequest.type:
      const { response: patientResponse, error: patientError } = yield call(
        getAllPatientAppointments,
        token
      );
      console.log(patientResponse);

      response = patientResponse;
      error = patientError;
      break;
  }

  if (response) {
    yield put(setUserAppointments(response.data.appointments));
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

  const { response, error } = yield call(createAnAppointment, [
    { ...payload.payload },
    token,
  ]);

  if (response) {
    yield put(createAnAppointmentSuccess());
    yield put(getPatientAppointmentsRequest(getToken()));
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
