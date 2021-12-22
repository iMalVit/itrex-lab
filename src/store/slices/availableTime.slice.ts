import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AvailableTimeState } from './slices.types';
import { RootStateType } from '../store';
import { availableTime } from '../actions';

const initialState: AvailableTimeState = {
  time: [],
  status: 'idle',
};

export const availableTimeSlice = createSlice({
  name: 'availableTime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(availableTime.success, (state, { payload }) => {
      state.time = payload;
      state.status = 'success';
    });

    builder.addCase(availableTime.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(availableTime.failed, (state) => {
      state.status = 'failed';
    });
  },
});

const getAvailableTimeState = (state: RootStateType) => state.availableTime;
export const selectAvailableTimeStatus = createSelector(
  getAvailableTimeState,
  (state) => state.status,
);
export const selectAvailableTimeTime = createSelector(
  getAvailableTimeState,
  (state) => state.time,
);
