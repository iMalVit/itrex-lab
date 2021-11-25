import { call, put } from "redux-saga/effects";
import {
  getAllDoctorAppointments,
  getUserProfile,
  login,
} from "../../../../api/api.util";
import {
  getDoctorAppointmentsRequest,
  getPatientAppointmentsRequest,
} from "../../../../store/appointmentsSlice";
import { setToken, getToken } from "../../../../store/token";
import {
  getUserDataRequest,
  getUserDataSuccess,
  getUserDataFailed,
  loginFailed,
  loginSuccess,
  userActions,
} from "../../../../store/userSlice";
import { statusMessageActions } from "../../../../store/statusMessageSlice";

export function* loginSaga({ payload }) {
  const userData = { ...payload };

  const { responce, error } = yield call(login, userData);

  if (responce) {
    yield setToken(responce.data.access_token);

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

  const { responce, error } = yield call(getUserProfile, getToken());

  if (responce) {
    yield put(userActions.setCurrentUser(responce.data));
    yield put(getUserDataSuccess());
    if (responce.data.role_name === "Patient") {
      yield put(getPatientAppointmentsRequest([20, 0, getToken()]));
    }
    if (responce.data.role_name === "Doctor") {
      yield put(getDoctorAppointmentsRequest([20, 0, getToken()]));
    }
  }

  if (error) {
    yield put(getUserDataFailed());
    console.log(error.message);
  }
}
