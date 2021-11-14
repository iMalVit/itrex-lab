import React from "react";
import DoctorCabinetUser from "./DoctorCabinetUser/DoctorCabinetUser";

const BoardOfDoctorsCabinetUser = (props) => {
  return (
    <>
      {props.doctors.map((doctor) => (
        <DoctorCabinetUser
          firstName={doctor.firstName}
          lastName={doctor.lastName}
          date={doctor.date}
          time={doctor.time}
          imageSrc={doctor.avatar}
          occupation={doctor.occupation}
          description={doctor.description}
          key={doctor.id}
        />
      ))}
    </>
  );
};

export default BoardOfDoctorsCabinetUser;
