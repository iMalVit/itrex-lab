import { call, put } from "redux-saga/effects";
import { register } from "../../../../../../api/api.util";
import {
  registerFailed,
  registerSuccess,
  loginRequest,
} from "../../../../../../store/userSlice";

export function* registerSaga({ payload }) {
  const userData = { ...payload };
  const { userName, password } = payload;
  const loginData = { userName, password };

  const { responce, error } = yield call(register, userData);

  if (responce) {
    yield put(registerSuccess());

    yield put(loginRequest(loginData));
  }

  if (error) {
    yield put(registerFailed());
    console.log(error.message);
  }
}
