import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createAppointment as createAppointmentAction } from '../actions/createAppointment.actions';
import { deleteAppointment as deleteAppointmentAction } from '../actions/deleteAppointment.actions';
import { selectProfileDataRoleName } from '../slices/profile.slice';

const useAppointment = () => {
  const roleName = useAppSelector(selectProfileDataRoleName);
  const dispatch = useAppDispatch();

  const makeAppointment = useCallback(
    (appointmentData) => {
      dispatch(createAppointmentAction.pending({ appointmentData, role_name: roleName }));
    },
    [dispatch],
  );

  const deleteAppointment = useCallback(
    (appointmentData) => {
      dispatch(deleteAppointmentAction.pending({ ...appointmentData, role_name: roleName }));
    },
    [dispatch],
  );

  return { makeAppointment, deleteAppointment };
};

export default useAppointment;
