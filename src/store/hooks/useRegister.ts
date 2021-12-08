import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import registration from '../actions/registration.actions';

// eslint-disable-next-line import/prefer-default-export
export const useRegister = () => {
  const dispatch = useDispatch();

  const signUp = useCallback(
    (userData) => {
      dispatch(registration.pending(userData));
    },
    [dispatch],
  );

  return { signUp };
};
