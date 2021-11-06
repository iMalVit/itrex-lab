import React from "react";
import Patient from "./Patient/Patient";

const BoardOfPatients = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default BoardOfPatients;
