import { createSlice } from '@reduxjs/toolkit';
import createAnAppointment from '../actions/createAppointment.actions';
import { CreateAnAppointmentState } from './slices.types';

const initialState: CreateAnAppointmentState = {
  status: 'idle',
};

export const createAnAppointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAnAppointment.success, (state) => {
        state.status = 'success';
      });

    builder
      .addCase(createAnAppointment.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(createAnAppointment.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export default createAnAppointmentSlice;
