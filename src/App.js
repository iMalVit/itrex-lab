import React from "react";
import AppRoutes from "./routes/AppRoutes";

import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";
import { getUserProfile } from "./api/api.util";
import { useHistory } from "react-router";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      getUserProfile(sessionStorage.getItem("access_token")).then((responce) =>
        dispatch(userActions.setCurrentUser(responce.data))
      );
    } else history.push("/");
  }, []);

  return <AppRoutes />;
};

export default App;
