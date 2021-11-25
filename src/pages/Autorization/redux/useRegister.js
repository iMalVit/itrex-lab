import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { PATH } from "../../../routes/routes";
import { registerRequest } from "../../../store/userSlice";

export const useRegister = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      switch (user.role_name) {
        case "Patient":
          history.push(PATH.CABINET_USER);
          break;
        case "Doctor":
          history.push(PATH.CABINET_DOCTOR);
          break;
      }
    }
  }, [user]);

  const register = useCallback(
    (userData) => {
      dispatch(registerRequest(userData));
    },
    [dispatch]
  );

  return { register };
};
