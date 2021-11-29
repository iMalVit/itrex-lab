import { call, put } from "redux-saga/effects";
import { getUserProfile, login } from "../../../api/api.util";
import {
  getDoctorAppointmentsRequest,
  getPatientAppointmentsRequest,
} from "../../appointmentsSlice";
import { setToken, getToken } from "../../token";
import {
  getUserDataRequest,
  getUserDataSuccess,
  getUserDataFailed,
  loginFailed,
  loginSuccess,
  userActions,
} from "../../userSlice";

export function* loginSaga({ payload }) {
  const userData = { ...payload };

  const { response, error } = yield call(login, userData);

  if (response) {
    yield setToken(response.data.access_token);

    yield put(loginSuccess());
    yield getProfileInfo();
  }

  if (error) {
    yield put(loginFailed());
    console.log(error.message);
  }
}

function* getProfileInfo() {
  yield put(getUserDataRequest());

  const { response, error } = yield call(getUserProfile, getToken());

  if (response) {
    yield put(userActions.setCurrentUser(response.data));
    yield put(getUserDataSuccess());
    if (response.data.role_name === "Patient") {
      yield put(getPatientAppointmentsRequest(getToken()));
    }
    if (response.data.role_name === "Doctor") {
      yield put(getDoctorAppointmentsRequest(getToken()));
    }
  }

  if (error) {
    yield put(getUserDataFailed());
    console.log(error.message);
  }
}
