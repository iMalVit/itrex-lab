import React from "react";
import PatientCabinetDoctor from "./PatientCabinetDoctor/PatientCabinetDoctor";

const BoardOfPatientsCabinetDoctor = (props) => {
  return (
    <React.Fragment>
      {props.patients.map((patient) => (
        <PatientCabinetDoctor
          firstName={patient.firstName}
          lastName={patient.lastName}
          time={patient.time}
          imageSrc={patient.avatar}
          description={patient.description}
          status={patient.status}
          key={patient.id}
        />
      ))}
    </React.Fragment>
  );
};

export default BoardOfPatientsCabinetDoctor;
