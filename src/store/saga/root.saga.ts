import { all } from 'redux-saga/effects';
import loginSaga from './login/login.saga';
import profileSaga from './cabinet/profile.saga';
import appointmentsSaga from './cabinet/appointments.saga';
import registrationSaga from './registration/registration.saga';
import createAppointmentSaga from './cabinet/createAppointment.saga';
import specializationsSaga from './cabinet/specializations.saga';
import doctorsPerSpecializationSaga from './cabinet/doctorsPerSpecialization.saga';
import availableTimeSaga from './cabinet/availableTime.saga';
import deleteAppointmentSaga from './cabinet/deleteAppointment.saga';
import resolutionsSaga from './cabinet/resolutions.saga';
import createResolutionSaga from './cabinet/createResolution.saga';

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
    deleteAppointmentSaga(),
    resolutionsSaga(),
    createResolutionSaga(),
  ]);
}

export default rootSaga;
