import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { registration } from "../actions/registration.actions";
import { PATH } from "../../routes/routes";
import { useHistory } from "react-router";

export const useRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = useCallback(
    (userData) => {
      console.log(userData);
      dispatch(registration.pending(userData));
      history.push(PATH.CABINET)
    },
    [dispatch]
  );

  return { signUp };
};
