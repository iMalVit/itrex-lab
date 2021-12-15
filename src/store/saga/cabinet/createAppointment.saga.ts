import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import appointments from '../../actions/appointments.actions';
import { makeAppointment } from '../../../api/appointments/appointments.api';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import createAppointment from '../../actions/createAppointment.actions';
import { errorNotify, successNotify } from '../../../utils/tosify.util';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    const payload = { role_name: 'Patient' };
    yield put(appointments.pending(payload));
    successNotify('The appointment has been successfully added');
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    if (error.response.status === 400) {
      errorNotify(error.response.data.message);
    } else {
      errorNotify(error.response.data);
    }
  }
}

function* createAppointmentPost(action: ReturnType<typeof createAppointment.pending>) {
  const { payload } = action;

  const response: AxiosResponse<AppointmentsResponseType> = yield call(makeAppointment, payload);

  return response.data;
}

const createAppointmentPostSaga = runAsyncSaga.bind(null, createAppointment, createAppointmentPost);

function* createAppointmentWatcher() {
  yield takeEvery(createAppointment.pending, createAppointmentPostSaga);
}

function* createAppointmentSaga() {
  yield createAppointmentWatcher();
}

export default createAppointmentSaga;
