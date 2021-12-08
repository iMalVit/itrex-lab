import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from '../../hooks';
import createAnAppointment from '../actions/createAppointment.actions';
import PATH from '../../routes/routes';

const useCreateAnAppointment = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const createAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAnAppointment.pending(appointmentData));
      history.push(PATH.CABINET);
    },
    [dispatch],
  );

  return { createAppointment };
};

export default useCreateAnAppointment;
