import { createSlice } from '@reduxjs/toolkit';
import registration from '../actions/registration.actions';
import { Request } from './slices.types';

const initialState: Request = {
  status: 'idle',
};

export const registrationSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.success, (state) => {
        state.status = 'success';
      });

    builder
      .addCase(registration.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(registration.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export default registrationSlice;
