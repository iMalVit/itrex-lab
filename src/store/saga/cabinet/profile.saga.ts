import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { ProfileResponseType } from '../../../api/auth/auth.types';

import {
  profile, appointments, resolutions, login,
} from '../../actions';
import { fetchUserProfile } from '../../../api';
import { ROLES } from '../../../common/constants';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    if (result.role_name === ROLES[1]) {
      yield put(resolutions.pending({ offset: 0, limit: 100 }));
    }
    yield put(appointments.pending({ ...result }));
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    yield put(login.failed(''));
  }
}

function* profilePost() {
  const response: AxiosResponse<ProfileResponseType> = yield call(
    fetchUserProfile,
  );

  return response.data;
}

const profilePostSaga = runAsyncSaga.bind(null, profile, profilePost);

function* profileWatcher() {
  yield takeEvery(profile.pending, profilePostSaga);
}

function* profileSaga() {
  yield profileWatcher();
}

export default profileSaga;
