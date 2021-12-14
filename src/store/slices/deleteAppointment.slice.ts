import { createSlice } from '@reduxjs/toolkit';
import deleteAppointment from '../actions/deleteAppointment.actions';
import { DeleteAppointmentState } from './slices.types';

const initialState: DeleteAppointmentState = {
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

export default deleteAppointmentSlice;
