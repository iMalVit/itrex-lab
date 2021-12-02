import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { PATH } from "../../routes/routes";
import { login } from "../actions/login.actions";

export const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = useCallback(
    (userData) => {
      console.log(userData);
      dispatch(login.pending(userData));
      console.log("HUY");
      history.push(PATH.CABINET);
    },
    [dispatch]
  );

  return { signIn };
};
