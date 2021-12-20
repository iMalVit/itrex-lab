import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';

import { deleteAppointment, resolutions, appointments } from '../../actions';
import { deleteAppointmentByDoctor } from '../../../api';
import { successNotify, errorNotify } from '../../../utils/tosify.util';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(appointments.pending({ role_name: result.payload.role_name }));
    yield put(resolutions.pending({ offset: 0, limit: 100 }));
    successNotify('The  appointment has been successfully deleted');
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    errorNotify(error.message.data);
  }
}

function* deleteAppointmentPost(
  action: ReturnType<typeof deleteAppointment.pending>,
) {
  const { payload } = action;
  const response: AxiosResponse = yield call(
    deleteAppointmentByDoctor,
    payload.id,
  );

  return { response, payload };
}

const deleteAppointmentPostSaga = runAsyncSaga.bind(
  null,
  deleteAppointment,
  deleteAppointmentPost,
);

function* deleteAppointmentWatcher() {
  yield takeEvery(deleteAppointment.pending, deleteAppointmentPostSaga);
}

function* deleteAppointmentSaga() {
  yield deleteAppointmentWatcher();
}

export default deleteAppointmentSaga;
