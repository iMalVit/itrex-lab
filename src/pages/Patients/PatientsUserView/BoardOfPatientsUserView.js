import React from "react";
import PatientUserView from "./PatientUserView/PatientUserView";

const BoardOfPatientsUserView = (props) => {
  return (
    <React.Fragment>
      {props.doctors.map((doctor) => (
        <PatientUserView
          firstName={doctor.firstName}
          lastName={doctor.lastName}
          time={doctor.time}
          imageSrc={doctor.avatar}
          description={doctor.description}
          key={doctor.id}
        />
      ))}
    </React.Fragment>
  );
};

export default BoardOfPatientsUserView;
