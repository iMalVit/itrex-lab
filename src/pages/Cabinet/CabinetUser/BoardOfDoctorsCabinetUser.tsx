import React from 'react';
import DoctorCabinetUser from './DoctorCabinetUser/DoctorCabinetUser';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments } from '../../../store/slices/appointments.slice';

const BoardOfDoctorsCabinetUser = () => {
  const appointments = useAppSelector(selectAppointmentsAppointments);

  return (
    <>
      {appointments.map((appointment: any) => (
        <DoctorCabinetUser
          firstName={appointment.doctor.first_name}
          lastName={appointment.doctor.last_name}
          date={new Date(appointment.visit_date)}
          time={new Date(appointment.visit_date).getHours()}
          imageSrc={appointment.doctor.photo}
          occupation={appointment.doctor.specialization_name}
          description={appointment.reason}
          key={appointment.id}
        />
      ))}
    </>
  );
};

export default BoardOfDoctorsCabinetUser;
