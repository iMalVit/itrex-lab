import { createSlice } from '@reduxjs/toolkit';

import profile from '../actions/profile.actions';
import { ProfileResponseType } from '../../api/auth/auth.types';
import { ProfileStateType } from './slices.types';

const initialState: ProfileStateType = {
  id: '',
  first_name: '',
  last_name: '',
  photo: '',
  role_name: '',
  status: 'idle',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.success, (state, { payload }: { payload: ProfileResponseType }) => {
        state.id = payload.id;
        state.first_name = payload.first_name;
        state.last_name = payload.last_name;
        state.photo = payload.photo;
        state.role_name = payload.role_name;
        state.status = 'success';
      });
    builder
      .addCase(profile.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(profile.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export default profileSlice;
