import { call, put, takeEvery } from 'redux-saga/effects';

import { login } from "../../actions/login.actions";
import { AxiosResponse } from 'axios';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

import { LoginResponseType } from '../../../api/auth/auth.types';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { signIn, signUp } from '../../../api/auth/auth';
import { registration } from '../../actions/registration.actions';
import { setToken } from '../../token';
import { profile } from '../../actions/profile.actions';


// import { call, put } from "redux-saga/effects";
// import { getUserProfile, login } from "../../../api/auth/auth";
// import {
//   getDoctorAppointmentsRequest,
//   getPatientAppointmentsRequest,
// } from "../../appointmentsSlice";
// import { setToken, getToken } from "../../token";
// import {
//   getUserDataRequest,
//   getUserDataSuccess,
//   getUserDataFailed,
//   loginFailed,
//   loginSuccess,
//   userActions,
// } from "../../userSlice";

// export function* loginSaga({ payload }) {
//   const userData = { ...payload };

//   const { response, error } = yield call(login, userData);

//   if (response) {
//     yield setToken(response.data.access_token);

//     yield put(loginSuccess());
//     yield getProfileInfo();
//   }

//   if (error) {
//     yield put(loginFailed());
//     console.dir(error.message);
//   }
// }

// function* getProfileInfo() {
//   yield put(getUserDataRequest());

//   const { response, error } = yield call(getUserProfile, getToken());

//   if (response) {
//     yield put(userActions.setCurrentUser(response.data));
//     yield put(getUserDataSuccess());
//     if (response.data.role_name === "Patient") {
//       yield put(getPatientAppointmentsRequest(getToken()));
//     }
//     if (response.data.role_name === "Doctor") {
//       yield put(getDoctorAppointmentsRequest(getToken()));
//     }
//   }

//   if (error) {
//     yield put(getUserDataFailed());
//     console.log(error.message);
//   }
// }

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    console.log(action);
    console.log(saga);
    console.log(pendingAction);
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(profile.pending({
      id: "",
  first_name: "",
  last_name: "",
  photo: "",
  role_name: ""
    }));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    console.log(errorSerialized)
    yield put(action.failed(errorSerialized));
    // throw error;
  }
}

function* registrationPost(action: ReturnType<typeof registration.pending>) {
  const { payload } = action;
  console.log(payload)
  const response: AxiosResponse<LoginResponseType> = yield call(
    signUp,
    payload
  );

  console.log(response.data)

  const { data } = response;
  console.log(data);

  if (data.access_token) {
  setToken(data.access_token)
  }

  yield put(login.success({
    access_token: "",
    refresh_token: ""
  }))

  return response.data;
}



const registrationPostSaga = runAsyncSaga.bind(null, registration, registrationPost);

function* registerWatcher() {
  yield takeEvery(registration.pending, registrationPostSaga);
}

export function* registrationSaga() {
  yield registerWatcher();
}
