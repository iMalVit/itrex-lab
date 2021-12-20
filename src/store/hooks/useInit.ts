import { useAppDispatch } from '../../hooks';
import { getAccessToken } from '../token';
import { profile, login } from '../actions';

const useInit = () => {
  const dispatch = useAppDispatch();

  const fetchProfile = async () => {
    await dispatch(
      profile.pending(''),
    );
  };

  const start = () => {
    if (getAccessToken()) {
      dispatch(login.success(''));
      fetchProfile();
    }
  };

  return { start };
};

export default useInit;
