import { createSlice } from '@reduxjs/toolkit';
import { registration } from '../actions/registration.actions';
import {RegistrationState} from "./slices.types"



const initialState: RegistrationState = {
  status: 'idle',
};

export const registrationSlice= createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.success, (state, { payload }) => {
        state.status = 'success';
      });

    builder
      .addCase(registration.pending, (state, { payload }) => {
        state.status = 'loading';
      });
    
    builder
      .addCase(registration.failed, (state, { payload }) => {
        state.status = 'failed';
      });
  },
});
;

export default registrationSlice;