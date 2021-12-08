import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import appointments from '../../actions/appointments.actions';
import { makeAnAppointment } from '../../../api/api.util';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import createAppointment from '../../actions/createAppointment.actions';
import { errorNotify, successNotify } from '../../../utils/tosify';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(appointments.pending(result));
    successNotify('The appointment has been successfully added');
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    errorNotify(error.response.data);
    throw error;
  }
}

function* createAnAppointmentPost(action: ReturnType<typeof createAppointment.pending>) {
  const { payload } = action;

  const response: AxiosResponse<AppointmentsResponseType> = yield call(makeAnAppointment, payload);

  return response.data;
}

const createAnAppointmentPostSaga = runAsyncSaga.bind(null, createAppointment, createAnAppointmentPost);

function* createAnAppointmentWatcher() {
  yield takeEvery(createAppointment.pending, createAnAppointmentPostSaga);
}

function* createAppointmentSaga() {
  yield createAnAppointmentWatcher();
}

export default createAppointmentSaga;
