import { useAppDispatch } from '../../hooks';
import { getToken } from '../token';
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
    if (getToken()) {
      dispatch(login.success(''));
      fetchProfile();
    }
  };

  return { start };
};

export default useInit;
