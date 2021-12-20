import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AsyncActionType, AnyFunction } from '../saga.types';
import { resolutions } from '../../actions';
import { fetchAllDoctorsResolutions } from '../../../api';

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
  }
}

function* appointmentPost(action: ReturnType<typeof resolutions.pending>) {
  const { offset, limit } = action.payload;
  const response: AxiosResponse = yield call(
    fetchAllDoctorsResolutions,
    offset,
    limit,
  );
  return response.data;
}

const resolutionsPostSaga = runAsyncSaga.bind(
  null,
  resolutions,
  appointmentPost,
);

function* resolutionsWatcher() {
  yield takeEvery(resolutions.pending, resolutionsPostSaga);
}

function* resolutionsSaga() {
  yield resolutionsWatcher();
}

export default resolutionsSaga;
