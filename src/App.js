import React from "react";
import AppRoutes from "./routes/AppRoutes";

import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";
import { getToken } from "./store/token";
import { useInit } from "./store/hooks/useInit";

const App = () => {
  const { start } = useInit();
  const dispatch = useDispatch();

  useEffect(() => {
    start();
  }, []);
  dispatch(userActions.setLoginStatus(Boolean(getToken())));

  return <AppRoutes />;
};

export default App;
