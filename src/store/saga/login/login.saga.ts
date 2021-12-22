import { call, put, takeEvery } from 'redux-saga/effects';
import dictionary from 'common/dictionary';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { login, profile } from '../../actions';
import { setAccessToken, setRefreshToken } from '../../token';
import { LoginResponseType } from '../../../api/auth/auth.types';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { signIn } from '../../../api';
import { successNotify, errorNotify } from '../../../utils/tosify.util';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(profile.pending(''));
    successNotify(dictionary.notifyMessages.loginSuccessMessage);
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };

    yield put(action.failed(errorSerialized));
    errorNotify(error.response.data);
  }
}

function* loginPost(action: ReturnType<typeof login.pending>) {
  const { payload } = action;

  const response: AxiosResponse<LoginResponseType> = yield call(
    signIn,
    payload,
  );

  const { data } = response;
  if (data.access_token && data.refresh_token) {
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);
  }

  return response.data;
}

const loginPostSaga = runAsyncSaga.bind(null, login, loginPost);

function* loginWatcher() {
  yield takeEvery(login.pending, loginPostSaga);
}

function* loginSaga() {
  yield loginWatcher();
}

export default loginSaga;
