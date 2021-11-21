import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: "",
    last_name: "",
    id: "",
    photo: "",
    role_name: "",
  },
  reducers: {
    setCurrentUser(state, action) {
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        id: action.payload.id,
        photo: action.payload.photo,
        role_name: action.payload.role_name,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
