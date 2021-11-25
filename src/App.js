import React from "react";
import AppRoutes from "./routes/AppRoutes";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";
import { getUserProfile } from "./api/api.util";
import { useHistory } from "react-router";
import { getToken } from "./store/token";
import { PATH } from "./routes/routes";
import { getPatientAppointmentsRequest } from "./store/appointmentsSlice";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (
      getToken() &&
      (history.location.pathname === PATH.CABINET_DOCTOR ||
        history.location.pathname === PATH.CABINET_USER ||
        history.location.pathname === PATH.CABINET_USER_MAKE_AN_APPOINTMENT)
    ) {
      console.log(history.location);
      getUserProfile(getToken())
        .then((responce) =>
          dispatch(userActions.setCurrentUser(responce.responce.data))
        )
        .then((responce) => {
          dispatch(getPatientAppointmentsRequest([20, 0, getToken()]));
        });
    } else history.push(history.location.path);
  }, []);

  return <AppRoutes />;
};

export default App;
