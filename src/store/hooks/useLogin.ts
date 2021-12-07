import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { login } from "../actions/login.actions";

export const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = useCallback(
    (userData) => {
      dispatch(login.pending(userData));

    },
    [dispatch, history]
  );

  return { signIn };
};
