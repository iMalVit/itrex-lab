import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { PATH } from "../../routes/routes";
import { createAnAppointment } from "../actions/createAnAppointment.actions";
export const useCreateAnAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const createAppointment = useCallback(
    (appointmentData) => {
      console.log(appointmentData)
        dispatch(createAnAppointment.pending(appointmentData))
      history.push(PATH.CABINET);
    },
    [dispatch]
  );

  return { createAppointment };
};
