// import { put, takeEvery, call } from "redux-saga/effects";

// import { getToken } from "../../token";

// import {
//   getPatientAppointmentsRequest,
//   getDoctorAppointmentsRequest,
//   setUserAppointments,
//   getDoctorAppointmentsSuccess,
//   getPatientAppointmentsSuccess,
//   getPatientAppointmentsFailed,
//   getDoctorAppointmentsFailed,
//   createAnAppointmentRequest,
//   createAnAppointmentSuccess,
//   createAnAppointmentFailed,
// } from "../../appointmentsSlice";

// import { statusMessageActions } from "../../statusMessageSlice.js";

// import {
//   getAllDoctorAppointments,
//   getAllPatientAppointments,
//   createAnAppointment,
// } from "../../../api/api.util";

// export function* getAppointmentsWorker({ type, payload }) {
//   let response;
//   let error;
//   const token = getToken();
//   console.log({ type, payload });

//   switch (type) {
//     case getDoctorAppointmentsRequest.type:
//       const { response: doctorResponse, error: doctorError } = yield call(
//         getAllDoctorAppointments,
//         token
//       );
//       response = doctorResponse;
//       error = doctorError;
//       break;
//     case getPatientAppointmentsRequest.type:
//       const { response: patientResponse, error: patientError } = yield call(
//         getAllPatientAppointments,
//         token
//       );
//       console.log(patientResponse);

//       response = patientResponse;
//       error = patientError;
//       break;
//   }

//   if (response) {
//     yield put(setUserAppointments(response.data.appointments));
//     switch (type) {
//       case getPatientAppointmentsRequest.type:
//         yield put(getPatientAppointmentsSuccess());
//         yield put(statusMessageActions.setSuccessStatus());

//         break;

//       case getDoctorAppointmentsRequest.type:
//         yield put(getDoctorAppointmentsSuccess());
//         break;
//     }
//   } else {
//     switch (type) {
//       case getPatientAppointmentsRequest.type:
//         yield put(getPatientAppointmentsFailed());
//         break;

//       case getDoctorAppointmentsRequest.type:
//         yield put(getDoctorAppointmentsFailed());
//         break;
//     }
//   }
// }

// export function* createAnAppointmentWorker(payload) {
//   const token = yield getToken();
//   console.log(token);
//   console.log(payload);
//   console.log([{ ...payload.payload }, token]);

//   const { response, error } = yield call(createAnAppointment, [
//     { ...payload.payload },
//     token,
//   ]);

//   if (response) {
//     yield put(createAnAppointmentSuccess());
//     yield put(getPatientAppointmentsRequest(getToken()));
//   }
//   if (error) {
//     yield put(createAnAppointmentFailed());
//     yield put(statusMessageActions.setFailedStatus(error.message));
//   }
// }

// export function* getAppointmentsWatcher() {
//   yield takeEvery(getPatientAppointmentsRequest, getAppointmentsWorker);
//   yield takeEvery(getDoctorAppointmentsRequest, getAppointmentsWorker);
// }

// export function* createAnAppointmentWatcher() {
//   yield takeEvery(createAnAppointmentRequest, createAnAppointmentWorker);
// }

import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import { appointments } from '../../actions/appointments.actions';
import { getAllPatientAppointments } from '../../../api/api.util';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import { statusMessageActions } from '../../statusMessageSlice';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    console.log(result)
    yield put(statusMessageActions.setSuccessStatus('success'))
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    yield put(statusMessageActions.setFailedStatus(error.message))

    throw error;
  }
}

function* appointmentPost(action: ReturnType<typeof appointments.pending>) {
  const { payload } = action;
  console.log(action)
  const responce: AxiosResponse<AppointmentsResponseType> = yield call(getAllPatientAppointments);
  
  console.log(responce);

  return responce.data;

}

const appointmentsPostSaga = runAsyncSaga.bind(null, appointments, appointmentPost);

function* appointmentsWatcher() {
  yield takeEvery(appointments.pending, appointmentsPostSaga);
}

export function* appointmentsSaga() {
  yield appointmentsWatcher();
}


