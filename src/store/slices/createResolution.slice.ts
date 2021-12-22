import { createSlice } from '@reduxjs/toolkit';
import { createResolution } from '../actions';
import { Request } from './slices.types';

const initialState: Request = {
  status: 'idle',
};

export const createResolutionSlice = createSlice({
  name: 'createResolution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createResolution.success, (state) => {
        state.status = 'success';
      });

    builder
      .addCase(createResolution.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(createResolution.failed, (state) => {
        state.status = 'failed';
      });
  },
});
