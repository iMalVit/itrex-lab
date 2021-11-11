import React from "react";
import Patient from "./PatientDoctorView/PatientDoctorView";

const BoardOfPatients = (props) => {
  return (
    <>
      {props.patients.map((patient) => (
        <Patient
          firstName={patient.firstName}
          lastName={patient.lastName}
          time={patient.time}
          imageSrc={patient.avatar}
          description={patient.description}
          status={patient.status}
          key={patient.id}
        />
      ))}
    </>
  );
};

export default BoardOfPatients;
