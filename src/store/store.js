import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import appointmentsSlice from "./appointmentsSlice";

import { rootSaga } from "./saga/rootSaga";
import statusMessageSlice from "./statusMessageSlice";

import userSlice from "./userSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    appointments: appointmentsSlice.reducer,
    statusMessage: statusMessageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
