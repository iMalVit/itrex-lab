import { all } from "redux-saga/effects";
import {
  getAppointmentsWatcher,
  createAnAppointmentWatcher,
} from "./cabinet/appointmentsSaga";
import { loginWatcher } from "./login/loginWatcher";
import { registerWatcher } from "./register/registerWatcher";

export function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    getAppointmentsWatcher(),
    createAnAppointmentWatcher(),
  ]);
}
