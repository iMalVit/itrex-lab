import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from '../saga.types';
import { ProfileResponseType } from '../../../api/auth/auth.types';

import { fetchDoctorsBySpecialization } from '../../../api';
import { doctorsPerSpecialization } from '../../actions';

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

function* doctorsPerSpecializationPost(
  action: ReturnType<typeof doctorsPerSpecialization.pending>,
) {
  const { payload } = action;
  const response: AxiosResponse<ProfileResponseType> = yield call(
    fetchDoctorsBySpecialization,
    payload,
  );

  return response.data;
}

const doctorsPerSpecializationPostSaga = runAsyncSaga.bind(
  null,
  doctorsPerSpecialization,
  doctorsPerSpecializationPost,
);

function* doctorsPerSpecializationWatcher() {
  yield takeEvery(
    doctorsPerSpecialization.pending,
    doctorsPerSpecializationPostSaga,
  );
}

function* doctorsPerSpecializationSaga() {
  yield doctorsPerSpecializationWatcher();
}

export default doctorsPerSpecializationSaga;
