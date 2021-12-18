import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import login from '../actions/login.actions';
import registration from '../actions/registration.actions';

// eslint-disable-next-line import/prefer-default-export
export const useAuth = () => {
  const dispatch = useDispatch();

  const signIn = useCallback(
    (userData) => {
      dispatch(login.pending(userData));
    },
    [dispatch],
  );

  const signUp = useCallback(
    (userData) => {
      dispatch(registration.pending(userData));
    },
    [dispatch],
  );

  return { signIn, signUp };
};
