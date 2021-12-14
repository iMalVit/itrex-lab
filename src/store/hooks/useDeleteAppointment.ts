import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../hooks';
import PATH from '../../routes/routes';
import deleteAppointment from '../actions/deleteAppointment.actions';

const useDeleteAppointment = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const eraseAppointment = useCallback(
    (appointmentData) => {
      dispatch(deleteAppointment.pending(appointmentData));
      history.push(PATH.CABINET);
    },
    [dispatch],
  );

  return { eraseAppointment };
};

export default useDeleteAppointment;
