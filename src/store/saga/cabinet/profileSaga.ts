import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { ProfileResponseType } from '../../../api/auth/auth.types';

import { profile } from '../../actions/profile.actions';
import { getUserProfile } from '../../../api/auth/auth';
import { appointments } from '../../actions/appointments.actions';

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
    throw error;
  }
}

function* profilePost() {
  const response: AxiosResponse<ProfileResponseType> = yield call(getUserProfile);

  return response.data;
}

const profilePostSaga = runAsyncSaga.bind(null, profile, profilePost);

function* profileWatcher() {
  yield takeEvery(profile.pending, profilePostSaga);
}

export function* profileSaga() {
  yield profileWatcher();
}

