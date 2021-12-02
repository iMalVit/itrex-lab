import { useAppDispatch } from "../../hooks";
import { getToken } from "../token";
import { profile } from "../actions/profile.actions";
import { useHistory } from "react-router";
import { PATH } from "../../routes/routes";
import { login } from "../actions/login.actions";

export const useInit = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const fetch = async () => {
    await dispatch(
      profile.pending({
        id: "",
        first_name: "",
        last_name: "",
        photo: "",
        role_name: "",
      })
    );
    history.push(PATH.CABINET);
  };

  const start = () => {
    if (getToken()) {
      dispatch(login.success({
        access_token: "",
        refresh_token: ""
      }));
      fetch();
    }
  };

  return { start };
};
