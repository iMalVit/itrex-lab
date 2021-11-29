import { takeEvery } from "@redux-saga/core/effects";
import { registerRequest } from "../../userSlice";
import { registerSaga } from "./registerSaga";

export function* registerWatcher() {
  yield takeEvery(registerRequest, registerSaga);
}
