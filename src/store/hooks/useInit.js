import { useDispatch } from "react-redux";
import { getToken } from "../token";
import { getUserProfile } from "../../api/api.util";
import { getPatientAppointmentsRequest } from "../appointmentsSlice";
import { userActions } from "../userSlice";

export const useInit = () => {
  const dispatch = useDispatch();

  const start = () => {
    if (getToken()) {
      getUserProfile(getToken())
        .then((response) => {
          dispatch(userActions.setCurrentUser(response.response.data));
        })
        .then((response) => {
          dispatch(getPatientAppointmentsRequest(getToken()));
        });
    }
  };

  return { start };
};
