import { call, put } from "redux-saga/effects";
import { register } from "../../../api/api.util";
import { registerFailed, registerSuccess, loginRequest } from "../../userSlice";

export function* registerSaga({ payload }) {
  const userData = { ...payload };
  const { userName, password } = payload;
  const loginData = { userName, password };

  const { response, error } = yield call(register, userData);

  if (response) {
    yield put(registerSuccess());

    yield put(loginRequest(loginData));
  }

  if (error) {
    yield put(registerFailed());
    console.log(error.message);
  }
}
