import React from 'react';
import PatientCabinetDoctor from './PatientCabinetDoctor/PatientCabinetDoctor';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments } from '../../../store/slices/appointments.slice';

const BoardOfPatientsCabinetDoctor = () => {
  const appointments = useAppSelector(selectAppointmentsAppointments);

  return (
    <>
      {appointments.map((appointment: any) => (
        <PatientCabinetDoctor
          firstName={appointment.patient.first_name}
          lastName={appointment.patient.last_name}
          date={new Date(appointment.visit_date)}
          time={new Date(appointment.visit_date).getHours()}
          imageSrc={appointment.patient.photo}
          description={appointment.reason}
          status={appointment.status}
          key={appointment.id}
        />
      ))}
    </>
  );
};

export default BoardOfPatientsCabinetDoctor;
