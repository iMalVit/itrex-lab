import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { PATH } from "../../routes/routes";
import { loginRequest } from "../userSlice";
export const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useCallback(
    (userData) => {
      dispatch(loginRequest(userData));
      history.push(PATH.CABINET);
    },
    [dispatch]
  );

  return { login };
};
