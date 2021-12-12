import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AvailableTimeState } from './slices.types';
import { RootStateType } from '../store';
import fetchAvailableTime from '../actions/availableTime.actions';

const initialState: AvailableTimeState = {
  time: [],
  status: 'idle',
};

export const availableTimeSlice = createSlice({
  name: 'availableTime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableTime.success, (state, { payload }) => {
        state.time = payload;
        state.status = 'success';
      });

    builder
      .addCase(fetchAvailableTime.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(fetchAvailableTime.failed, (state) => {
        state.status = 'failed';
      });
  },
});

const getAvailableTimeState = (state: RootStateType) => state.availableTime;
export const selectAvailableTimeStatus = createSelector(getAvailableTimeState, (state) => state.status);
export const selectAvailableTimeTime = createSelector(getAvailableTimeState, (state) => state.time);
export default availableTimeSlice;
