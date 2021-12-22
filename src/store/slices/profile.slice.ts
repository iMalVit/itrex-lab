import { createSelector, createSlice } from '@reduxjs/toolkit';

import { profile } from '../actions';
import { ProfileResponseType } from '../../api/auth/auth.types';
import { ProfileStateType } from './slices.types';
import { RootStateType } from '../store';

const initialState: ProfileStateType = {
  data: {
    id: '',
    first_name: '',
    last_name: '',
    photo: '',
    role_name: '',
  },
  status: 'idle',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      profile.success,
      (state, { payload }: { payload: ProfileResponseType }) => {
        state.data = payload;
        state.status = 'success';
      },
    );
    builder.addCase(profile.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(profile.failed, (state) => {
      state.status = 'failed';
    });
  },
});

const getProfileState = (state: RootStateType) => state.profile;
export const selectProfileData = createSelector(
  getProfileState,
  (state) => state.data,
);
export const selectProfileDataId = createSelector(
  getProfileState,
  (state) => state.data.id,
);
export const selectProfileDataFirstName = createSelector(
  getProfileState,
  (state) => state.data.first_name,
);
export const selectProfileDataLastName = createSelector(
  getProfileState,
  (state) => state.data.last_name,
);
export const selectProfileDataPhoto = createSelector(
  getProfileState,
  (state) => state.data.photo,
);
export const selectProfileDataRoleName = createSelector(
  getProfileState,
  (state) => state.data.role_name,
);
export const selectProfileStatus = createSelector(
  getProfileState,
  (state) => state.status,
);
