import { createSelector, createSlice } from '@reduxjs/toolkit';
import appointments from '../actions/appointments.actions';
import { AppointmentsStateType } from './slices.types';
import { RootStateType } from '../store';

const initialState: AppointmentsStateType = {
  appointments: [],
  status: 'idle',
};

export const appointmentsSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointments.success, (state, { payload }) => {
        state.appointments = [...payload.appointments];
        state.status = 'success';
      });

    builder
      .addCase(appointments.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(appointments.failed, (state) => {
        state.status = 'failed';
      });
  },
});

const getAppointmentsState = (state: RootStateType) => state.appointments;
export const selectAppointmentsAppointments = createSelector(getAppointmentsState, (state) => state.appointments);
export default appointmentsSlice;
