import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootStateType } from '../store';
import { SpecializationsState } from './slices.types';
import { specializations } from '../actions';

const initialState: SpecializationsState = {
  specializations: [],
  status: 'idle',
};

export const specializationsSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(specializations.success, (state, { payload }) => {
      state.specializations = payload;
      state.status = 'success';
    });

    builder.addCase(specializations.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(specializations.failed, (state) => {
      state.status = 'failed';
    });
  },
});

const getSpecializationsState = (state: RootStateType) => state.specializations;
export const selectSpecializationsStatus = createSelector(
  getSpecializationsState,
  (state) => state.status,
);
export const selectSpecializationsSpecializations = createSelector(
  getSpecializationsState,
  (state) => state.specializations,
);
