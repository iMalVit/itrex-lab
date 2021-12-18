import React from 'react';
import AppointmentCard from './components/AppointmentCard/AppointmentCard';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments } from '../../../store/slices/appointments.slice';

const CabinetDoctorBoardsOfAppointments = () => {
  const appointments = useAppSelector(selectAppointmentsAppointments);

  interface AppointmentType {
    id: string
    visit_date: string
    reason: string
    note: string
    status: string
    patient: {
      first_name: string
      last_name: string
      photo: string
      id: string
    }
  }

  return (
    <>
      {appointments.map((appointment: AppointmentType) => (
        <AppointmentCard
          appointmentId={appointment.id}
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

export default CabinetDoctorBoardsOfAppointments;
