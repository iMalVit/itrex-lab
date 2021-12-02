import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import appointmentsSlice from "./slices/appointments.slice";

import { rootSaga } from "./saga/rootSaga";
import loginSlice from "./slices/login.slice";
import profileSlice from "./slices/profile.slice";
import statusMessageSlice from "./statusMessageSlice.js";
import registrationSlice from "./slices/registration.slice";
import createAnAppointmentSlice from "./slices/createAnAppointment.slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer,
    login: loginSlice.reducer,
    profile: profileSlice.reducer,
    appointments: appointmentsSlice.reducer,
    createAnAppointment: createAnAppointmentSlice.reducer,
    statusMessage: statusMessageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

