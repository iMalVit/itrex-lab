import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { registration } from "../actions/registration.actions";
import { useHistory } from "react-router";

export const useRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = useCallback(
    (userData) => {

      dispatch(registration.pending(userData));
    },
    [dispatch, history]
  );

  return { signUp };
};
