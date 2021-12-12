import { all } from 'redux-saga/effects';
import loginSaga from './login/login.saga';
import profileSaga from './cabinet/profile.saga';
import appointmentsSaga from './cabinet/appointments.saga';
import registrationSaga from './register/registration.saga';
import createAppointmentSaga from './cabinet/createAppointment.saga';
import specializationsSaga from './cabinet/specializations.saga';
import doctorsPerSpecializationSaga from './cabinet/doctorsPerSpecialization.saga';
import availableTimeSaga from './cabinet/availableTime.saga';

function* rootSaga() {
  yield all([
    registrationSaga(),
    loginSaga(),
    profileSaga(),
    appointmentsSaga(),
    createAppointmentSaga(),
    specializationsSaga(),
    doctorsPerSpecializationSaga(),
    availableTimeSaga(),
  ]);
}

export default rootSaga;
