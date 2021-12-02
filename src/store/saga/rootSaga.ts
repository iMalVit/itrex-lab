import { all } from "redux-saga/effects";
import { loginSaga } from "./login/loginSaga";
import { profileSaga } from "./cabinet/profileSaga";
import { appointmentsSaga } from "./cabinet/appointmentsSaga";
import { registrationSaga } from "./register/registrationSaga";
import { createAnAppointmentSaga } from "./cabinet/createAnAppointmentSaga";

export function* rootSaga() {
  yield all([
    registrationSaga(),
    loginSaga(),
    profileSaga(),
    appointmentsSaga(),
    createAnAppointmentSaga(),
  ]);
}
