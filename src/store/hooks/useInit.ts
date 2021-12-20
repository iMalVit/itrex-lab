import { useAppDispatch } from '../../hooks';
import { getAccessToken } from '../token';
import profile from '../actions/profile.actions';
import login from '../actions/login.actions';

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
