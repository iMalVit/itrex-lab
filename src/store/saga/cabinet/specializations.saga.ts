import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { ProfileResponseType } from '../../../api/auth/auth.types';

import specializations from '../../actions/specializations.actions';
import { getDoctorsSpecializations } from '../../../api/api.util';

// eslint-disable-next-line max-len
function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
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

function* specializationsPost() {
  const response: AxiosResponse<ProfileResponseType> = yield call(getDoctorsSpecializations);

  return response.data;
}

const specializationsPostSaga = runAsyncSaga.bind(null, specializations, specializationsPost);

function* specializationsWatcher() {
  yield takeEvery(specializations.pending, specializationsPostSaga);
}

function* specializationsSaga() {
  yield specializationsWatcher();
}

export default specializationsSaga;
