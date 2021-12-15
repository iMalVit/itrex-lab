import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import createResolution from '../../actions/createResolution.actions';
import { errorNotify, successNotify } from '../../../utils/tosify.util';
import { makeResolution } from '../../../api/resolutions/resolutions.api';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    successNotify('The resolution has been successfully added');
  } catch (error: any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    errorNotify(error.response.data);
  }
}

function* createResolutionPost(action: ReturnType<typeof createResolution.pending>) {
  const { payload } = action;

  const response: AxiosResponse<AppointmentsResponseType> = yield call(makeResolution, payload);

  return response.data;
}

const createResolutionPostSaga = runAsyncSaga.bind(null, createResolution, createResolutionPost);

function* createResolutionWatcher() {
  yield takeEvery(createResolution.pending, createResolutionPostSaga);
}

function* createResolutionSaga() {
  yield createResolutionWatcher();
}

export default createResolutionSaga;
