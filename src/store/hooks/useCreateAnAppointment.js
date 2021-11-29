import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { createAnAppointmentRequest } from "../appointmentsSlice";
import { PATH } from "../../routes/routes";
export const useCreateAnAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const createAnAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAnAppointmentRequest(appointmentData));
      history.push(PATH.CABINET);
    },
    [dispatch]
  );

  return { createAnAppointment };
};
