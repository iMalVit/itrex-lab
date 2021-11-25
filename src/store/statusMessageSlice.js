import { createAction, createSlice } from "@reduxjs/toolkit";

const statusMessageSlice = createSlice({
  name: "statusMessage",
  initialState: {
    status: null,
    error: null,
  },
  reducers: {
    setSuccessStatus(state, action) {
      state.status = true;
    },

    setFailedStatus(state, action) {
      state.status = false;
      state.error = action.payload;
    },
    setUndefinedStatus(state, action) {
      state.status = null;
    },
  },
});

export const statusMessageActions = statusMessageSlice.actions;

export default statusMessageSlice;
