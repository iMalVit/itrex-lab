import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../hooks';
import createAppointment from '../actions/createAppointment.actions';
import PATH from '../../routes/routes';

const useCreateAppointment = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const makeAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAppointment.pending(appointmentData));
      history.push(PATH.CABINET);
    },
    [dispatch],
  );

  return { makeAppointment };
};

export default useCreateAppointment;
