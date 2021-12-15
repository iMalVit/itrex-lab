import { createSlice } from '@reduxjs/toolkit';
import createAppointment from '../actions/createAppointment.actions';
import { Request } from './slices.types';

const initialState: Request = {
  status: 'idle',
};

export const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.success, (state) => {
        state.status = 'success';
      });

    builder
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(createAppointment.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export default createAppointmentSlice;
