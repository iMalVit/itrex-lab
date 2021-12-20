import { createSelector, createSlice } from '@reduxjs/toolkit';
import { login } from '../actions';
import { RootStateType } from '../store';
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
        state.isLogged = false;
      });
  },
});

const getLoginState = (state: RootStateType) => state.login;
export const selectLoginStatus = createSelector(getLoginState, (state) => state.status);
export const selectLoginIsLogged = createSelector(getLoginState, (state) => state.isLogged);
