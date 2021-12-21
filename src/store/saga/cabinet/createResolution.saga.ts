import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { ROLES } from 'common/constants';
import { AsyncActionType, AnyFunction } from '../saga.types';
import { AppointmentsResponseType } from '../../../api/auth/auth.types';
import { appointments, createResolution, resolutions } from '../../actions';
import { errorNotify, successNotify } from '../../../utils/tosify.util';
import { makeResolution } from '../../../api';

function* runAsyncSaga(
  action: AsyncActionType,
  saga: AnyFunction,
  pendingAction?: PayloadActionCreator<any>,
): any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.success(result));
    yield put(resolutions.pending({ offset: 0, limit: 100 }));
    yield put(appointments.pending({ role_name: ROLES[1] }));
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

function* createResolutionPost(
  action: ReturnType<typeof createResolution.pending>,
) {
  const { payload } = action;

  const response: AxiosResponse<AppointmentsResponseType> = yield call(
    makeResolution,
    payload,
  );

  return response.data;
}

const createResolutionPostSaga = runAsyncSaga.bind(
  null,
  createResolution,
  createResolutionPost,
);

function* createResolutionWatcher() {
  yield takeEvery(createResolution.pending, createResolutionPostSaga);
}

function* createResolutionSaga() {
  yield createResolutionWatcher();
}

export default createResolutionSaga;
