import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import login from '../actions/login.actions';

// eslint-disable-next-line import/prefer-default-export
export const useLogin = () => {
  const dispatch = useDispatch();

  const signIn = useCallback(
    (userData) => {
      dispatch(login.pending(userData));
    },
    [dispatch],
  );

  return { signIn };
};
