import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import appointmentsSlice from './slices/appointments.slice';
import rootSaga from './saga/root.saga';
import loginSlice from './slices/login.slice';
import profileSlice from './slices/profile.slice';
import registrationSlice from './slices/registration.slice';
import createAppointmentSlice from './slices/createAppointment.slice';
import specializationsSlice from './slices/specializations.slice';
import doctorsPerSpecializationSlice from './slices/doctorsPerSpecialization.slice';
import availableTimeSlice from './slices/availableTime.slice';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const createRootReducer = (history: History<unknown>) => ({
  router: connectRouter(history),
  registration: registrationSlice.reducer,
  login: loginSlice.reducer,
  profile: profileSlice.reducer,
  appointments: appointmentsSlice.reducer,
  createAppointment: createAppointmentSlice.reducer,
  specializations: specializationsSlice.reducer,
  doctorsPerSpecialization: doctorsPerSpecializationSlice.reducer,
  availableTime: availableTimeSlice.reducer,
});

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware(history),
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
