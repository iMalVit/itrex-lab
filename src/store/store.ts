import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import {
  registrationSlice,
  loginSlice,
  profileSlice,
  appointmentsSlice,
  createAppointmentSlice,
  specializationsSlice,
  doctorsPerSpecializationSlice,
  availableTimeSlice,
  deleteAppointmentSlice,
  resolutionsSlice,
  createResolutionSlice,
} from './slices';
import rootSaga from './saga/root.saga';

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
  deleteAppointment: deleteAppointmentSlice.reducer,
  resolutions: resolutionsSlice.reducer,
  createResolution: createResolutionSlice.reducer,
});

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware,
    routerMiddleware(history),
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
