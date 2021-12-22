import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootStateType } from '../store';
import { DoctorsPerSpecializationState } from './slices.types';
import { doctorsPerSpecialization } from '../actions';

const initialState: DoctorsPerSpecializationState = {
  doctors: [],
  status: 'idle',
};

export const doctorsPerSpecializationSlice = createSlice({
  name: 'doctorsPerSpecialization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doctorsPerSpecialization.success, (state, { payload }) => {
      state.doctors = payload;
      state.status = 'success';
    });

    builder.addCase(doctorsPerSpecialization.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(doctorsPerSpecialization.failed, (state) => {
      state.status = 'failed';
    });
  },
});

const getDoctorsPerSpecializationState = (state: RootStateType) => state
  .doctorsPerSpecialization;
export const selectDoctorsPerSpecializationStatus = createSelector(
  getDoctorsPerSpecializationState,
  (state) => state.status,
);
export const selectDoctorsPerSpecializationDoctors = createSelector(
  getDoctorsPerSpecializationState,
  (state) => state.doctors,
);
