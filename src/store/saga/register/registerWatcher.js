import { takeEvery } from "@redux-saga/core/effects";
import { registerRequest } from "../../userSlice";
import { registerSaga } from "../../../pages/Autorization/SignIn/form/redux/saga/registerSaga";

export function* registerWatcher() {
  yield takeEvery(registerRequest, registerSaga);
}
