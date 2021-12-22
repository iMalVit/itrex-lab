import { createSlice } from '@reduxjs/toolkit';
import { deleteAppointment } from '../actions';
import { Request } from './slices.types';

const initialState: Request = {
  status: 'idle',
};

export const deleteAppointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAppointment.success, (state) => {
        state.status = 'success';
      });

    builder
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(deleteAppointment.failed, (state) => {
        state.status = 'failed';
      });
  },
});
