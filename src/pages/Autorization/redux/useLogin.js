import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { PATH } from "../../../../../routes/routes";
import { loginRequest } from "../../../../../store/userSlice";
import { statusMessageActions } from "../../../../../store/statusMessageSlice";
export const useLogin = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      switch (user.role_name) {
        case "Patient":
          history.push(PATH.CABINET_USER);
          dispatch(statusMessageActions.setSuccessStatus());

          break;
        case "Doctor":
          history.push(PATH.CABINET_DOCTOR);
          break;
      }
    }
  }, [user]);

  const login = useCallback(
    (userData) => {
      dispatch(loginRequest(userData));
    },
    [dispatch]
  );

  return { login };
};
