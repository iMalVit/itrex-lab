import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createAppointment as createAppointmentAction } from '../actions/createAppointment.actions';
import { deleteAppointment as deleteAppointmentAction } from '../actions/deleteAppointment.actions';
import PATH from '../../routes/routes';
import { selectProfileDataRoleName } from '../slices/profile.slice';

const useAppointment = () => {
  const roleName = useAppSelector(selectProfileDataRoleName);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const makeAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAppointmentAction.pending({ appointmentData, role_name: roleName }));
      history.push(PATH.CABINET);
    },
    [dispatch],
  );

  const deleteAppointment = useCallback(
    (appointmentData) => {
      dispatch(deleteAppointmentAction.pending({ ...appointmentData, role_name: roleName }));
      history.push(PATH.CABINET);
    },
    [dispatch],
  );

  return { makeAppointment, deleteAppointment };
};

export default useAppointment;
