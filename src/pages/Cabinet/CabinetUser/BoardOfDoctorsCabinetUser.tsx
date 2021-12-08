import React from 'react';
import DoctorCabinetUser from './DoctorCabinetUser/DoctorCabinetUser';
import { useAppSelector } from '../../../hooks';

const BoardOfDoctorsCabinetUser = () => {
  const appointments = useAppSelector((state) => state.appointments.appointments);

  return (
    <>
      {appointments.map((doctor: any) => (
        <DoctorCabinetUser
          firstName={doctor.doctor.first_name}
          lastName={doctor.doctor.last_name}
          date={new Date(doctor.visit_date)}
          time={new Date(doctor.visit_date).getHours()}
          imageSrc={doctor.doctor.photo}
          occupation={doctor.doctor.specialization_name}
          description={doctor.reason}
          key={doctor.id}
        />
      ))}
    </>
  );
};

export default BoardOfDoctorsCabinetUser;
