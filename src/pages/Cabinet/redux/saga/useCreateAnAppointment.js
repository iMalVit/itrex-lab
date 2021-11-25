import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { createAnAppointmentRequest } from "../../../../store/appointmentsSlice";
import { getToken } from "../../../../store/token";
import { PATH } from "../../../../routes/routes";
export const useCreateAnAppointment = () => {
  const history = useHistory();
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  //   useEffect(() => history.push(PATH.CABINET_USER), []);

  const createAnAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAnAppointmentRequest(appointmentData));
      history.push(PATH.CABINET_USER);
    },
    [dispatch]
  );

  return { createAnAppointment };
};
