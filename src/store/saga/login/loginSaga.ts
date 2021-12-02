import { call, put, takeEvery } from 'redux-saga/effects';

import { login } from "../../actions/login.actions";
import { AxiosResponse } from 'axios';
import { setToken } from '../../token';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

import { LoginResponseType } from '../../../api/auth/auth.types';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { signIn } from '../../../api/auth/auth';
import { profile } from '../../actions/profile.actions';


function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    console.log(action);
    console.log(saga);
    console.log(pendingAction);
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(profile.pending({
      id: "",
  first_name: "",
  last_name: "",
  photo: "",
  role_name: ""
    }));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    console.log(errorSerialized)
    yield put(action.failed(errorSerialized));
    // throw error;
  }
}

function* loginPost(action: ReturnType<typeof login.pending>) {
  const { payload } = action;
  console.log(payload)
  const response: AxiosResponse<LoginResponseType> = yield call(
    signIn,
    payload,
  );

  console.log(response)

  const { data } = response;
  console.log(data);

  if (data.access_token) {
  setToken(data.access_token)
  }

  return response.data;
}



const loginPostSaga = runAsyncSaga.bind(null, login, loginPost);

function* loginWatcher() {
  yield takeEvery(login.pending, loginPostSaga);
}

export function* loginSaga() {
  yield loginWatcher();
}
