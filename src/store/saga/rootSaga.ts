import { all } from 'redux-saga/effects';
import loginSaga from './login/loginSaga';
import profileSaga from './cabinet/profile.saga';
import appointmentsSaga from './cabinet/appointments.saga';
import registrationSaga from './register/registrationSaga';
import createAppointmentSaga from './cabinet/createAppointment.saga';

function* rootSaga() {
  yield all([
    registrationSaga(),
    loginSaga(),
    profileSaga(),
    appointmentsSaga(),
    createAppointmentSaga(),
  ]);
}

export default rootSaga;
