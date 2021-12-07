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

  const responce: AxiosResponse<AppointmentsResponseType> = yield call(getAllPatientAppointments);
  

  return responce.data;

}

const appointmentsPostSaga = runAsyncSaga.bind(null, appointments, appointmentPost);

function* appointmentsWatcher() {
  yield takeEvery(appointments.pending, appointmentsPostSaga);
}

export function* appointmentsSaga() {
  yield appointmentsWatcher();
}


