import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { ProfileResponseType } from '../../../api/auth/auth.types';

import { fetchAvailableTime } from '../../../api';
import { availableTime } from '../../actions';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    throw error;
  }
}

function* availableTimePost(action: ReturnType<typeof availableTime.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ProfileResponseType> = yield call(
    fetchAvailableTime,
    payload.date,
    payload.doctorId,
  );

  return response.data;
}

const specializationsPostSaga = runAsyncSaga.bind(
  null,
  availableTime,
  availableTimePost,
);

function* availableTimeWatcher() {
  yield takeEvery(availableTime.pending, specializationsPostSaga);
}

function* availableTimeSaga() {
  yield availableTimeWatcher();
}

export default availableTimeSaga;
