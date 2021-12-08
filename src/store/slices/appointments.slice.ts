import { createSlice } from '@reduxjs/toolkit';
import appointments from '../actions/appointments.actions';
import { AppointmentsStateType } from './slices.types';

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

export default appointmentsSlice;
