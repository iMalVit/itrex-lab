import { createAction, createSlice } from "@reduxjs/toolkit";

export const loginRequest = createAction("login/request");
export const loginSuccess = createAction("login/success");
export const loginFailed = createAction("login/failed");
export const getUserDataRequest = createAction("getUserData/request");
export const getUserDataSuccess = createAction("getUserData/success");
export const getUserDataFailed = createAction("getUserData/failed");
export const registerRequest = createAction("register/request");
export const registerSuccess = createAction("register/success");
export const registerFailed = createAction("register/failed");

const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: "",
    last_name: "",
    id: "",
    photo: "",
    role_name: "",
    isLogged: false,
  },
  reducers: {
    setCurrentUser(state, action) {
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        id: action.payload.id,
        photo: action.payload.photo,
        role_name: action.payload.role_name,
        isLogged: true,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
