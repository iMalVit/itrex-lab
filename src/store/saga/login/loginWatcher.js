import { takeEvery } from "@redux-saga/core/effects";
import { loginRequest } from "../../userSlice";
import { loginSaga } from "./loginSaga";

export function* loginWatcher() {
  yield takeEvery(loginRequest, loginSaga);
}
