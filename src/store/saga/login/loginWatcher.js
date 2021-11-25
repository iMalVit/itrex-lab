import { takeEvery } from "@redux-saga/core/effects";
import { loginRequest } from "../../userSlice";
import { loginSaga } from "../../../pages/Autorization/redux/saga/loginSaga";

export function* loginWatcher() {
  yield takeEvery(loginRequest, loginSaga);
}
