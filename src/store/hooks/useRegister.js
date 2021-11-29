import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { registerRequest } from "../../store/userSlice";

export const useRegister = () => {
  const dispatch = useDispatch();

  const register = useCallback(
    (userData) => {
      dispatch(registerRequest(userData));
    },
    [dispatch]
  );

  return { register };
};
