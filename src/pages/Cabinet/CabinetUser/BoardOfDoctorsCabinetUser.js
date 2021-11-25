import React from "react";
import DoctorCabinetUser from "./DoctorCabinetUser/DoctorCabinetUser";
import { useSelector } from "react-redux";

const BoardOfDoctorsCabinetUser = (props) => {
  const appointments = useSelector((state) => state.appointments.appointments);

  return (
    <>
      {appointments.map((doctor) => (
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
