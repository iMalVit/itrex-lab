import { createSelector, createSlice } from '@reduxjs/toolkit';
import resolutions from '../actions/resolutions.actions';
import { ResolutionsStateType } from './slices.types';
import { RootStateType } from '../store';

const initialState: ResolutionsStateType = {
  resolutions: [],
  status: 'idle',
};

export const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolutions.success, (state, { payload }) => {
        state.resolutions = [...payload.resolutions];
        state.status = 'success';
      });

    builder
      .addCase(resolutions.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(resolutions.failed, (state) => {
        state.status = 'failed';
      });
  },
});

const getResolutionsState = (state: RootStateType) => state.resolutions;
export const selectResolutionsArray = createSelector(getResolutionsState, (state) => state.resolutions);
export default resolutionsSlice;
