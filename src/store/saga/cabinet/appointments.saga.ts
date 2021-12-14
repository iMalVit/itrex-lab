import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import appointments from '../../actions/appointments.actions';
import { getAllDoctorAppointments, getAllPatientAppointments } from '../../../api/api.util';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
  }
}

function* appointmentPost(action: ReturnType<typeof appointments.pending>) {
  const { role_name } = action.payload;
  if (role_name === 'Patient') {
    const response: AxiosResponse<AppointmentsResponseType> = yield call(getAllPatientAppointments);
    return response.data;
  } if (role_name === 'Doctor') {
    const response: AxiosResponse<AppointmentsResponseType> = yield call(getAllDoctorAppointments);
    return response.data;
  }
}

const appointmentsPostSaga = runAsyncSaga.bind(null, appointments, appointmentPost);

function* appointmentsWatcher() {
  yield takeEvery(appointments.pending, appointmentsPostSaga);
}

function* appointmentsSaga() {
  yield appointmentsWatcher();
}

export default appointmentsSaga;
