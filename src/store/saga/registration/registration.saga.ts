import { call, put, takeEvery } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

import { LoginResponseType } from '../../../api/auth/auth.types';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { signUp } from '../../../api';
import { registration, profile, login } from '../../actions';
import { setAccessToken, setRefreshToken } from '../../token';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(profile.pending(''));
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };

    yield put(action.failed(errorSerialized));
  }
}

function* registrationPost(action: ReturnType<typeof registration.pending>) {
  const { payload } = action;

  const response: AxiosResponse<LoginResponseType> = yield call(
    signUp,
    payload,
  );

  const { data } = response;

  if (data.access_token && data.refresh_token) {
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);
  }

  yield put(
    login.success({
      access_token: '',
      refresh_token: '',
    }),
  );

  return response.data;
}

const registrationPostSaga = runAsyncSaga.bind(
  null,
  registration,
  registrationPost,
);

function* registerWatcher() {
  yield takeEvery(registration.pending, registrationPostSaga);
}

function* registrationSaga() {
  yield registerWatcher();
}

export default registrationSaga;
