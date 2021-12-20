import React from 'react';
import AppointmentCard from './components/AppointmentCard/AppointmentCard';

const CabinetUserBoardsOfAppointments = (props: any) => props.appointments
  .map((appointment: any) => (
    <AppointmentCard
      firstName={appointment.doctor.first_name}
      lastName={appointment.doctor.last_name}
      date={new Date(appointment.visit_date)}
      time={new Date(appointment.visit_date).getHours()}
      imageSrc={appointment.doctor.photo}
      occupation={appointment.doctor.specialization_name}
      description={appointment.reason}
      key={appointment.id}
    />
  ));

export default CabinetUserBoardsOfAppointments;
