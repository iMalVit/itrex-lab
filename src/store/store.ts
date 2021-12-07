import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import appointmentsSlice from "./slices/appointments.slice";

import { rootSaga } from "./saga/rootSaga";
import loginSlice from "./slices/login.slice";
import profileSlice from "./slices/profile.slice";
import registrationSlice from "./slices/registration.slice";
import createAnAppointmentSlice from "./slices/createAnAppointment.slice";
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';



const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();


const createRootReducer = (history: History<unknown>) => ({
  router: connectRouter(history),
  registration: registrationSlice.reducer,
  login: loginSlice.reducer,
  profile: profileSlice.reducer,
  appointments: appointmentsSlice.reducer,
  createAnAppointment: createAnAppointmentSlice.reducer,
});



const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware(history)
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

