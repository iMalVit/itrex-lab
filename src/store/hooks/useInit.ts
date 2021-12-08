import { useAppDispatch } from '../../hooks';
import { getToken } from '../token';
import profile from '../actions/profile.actions';
import login from '../actions/login.actions';

const useInit = () => {
  const dispatch = useAppDispatch();

  const fetch = async () => {
    await dispatch(
      profile.pending({
        id: '',
        first_name: '',
        last_name: '',
        photo: '',
        role_name: '',
      }),
    );
  };

  const start = () => {
    if (getToken()) {
      dispatch(login.success({
        access_token: '',
        refresh_token: '',
      }));
      fetch();
    }
  };

  return { start };
};

export default useInit;
