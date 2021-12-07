
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import { appointments } from '../../actions/appointments.actions';
import { makeAnAppointment } from '../../../api/api.util'
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import { createAnAppointment } from '../../actions/createAnAppointment.actions';
import { statusMessageActions } from '../../statusMessageSlice';


function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(appointments.pending(result))

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

function* createAnAppointmentPost(action: ReturnType<typeof createAnAppointment.pending>) {
  const { payload } = action;

  const responce: AxiosResponse<AppointmentsResponseType> = yield call(makeAnAppointment, payload);
  


  return responce.data;

}

const createAnAppointmentPostSaga = runAsyncSaga.bind(null, createAnAppointment, createAnAppointmentPost);

function* createAnAppointmentWatcher() {
  yield takeEvery(createAnAppointment.pending, createAnAppointmentPostSaga);
}

export function* createAnAppointmentSaga() {
  yield createAnAppointmentWatcher();
}


