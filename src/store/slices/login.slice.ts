import { createSlice } from '@reduxjs/toolkit';
import login from '../actions/login.actions';
import { LoginState } from './slices.types';

const initialState: LoginState = {
  status: 'idle',
  isLogged: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.success, (state) => {
        state.status = 'success';
        state.isLogged = true;
      });

    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(login.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export default loginSlice;
