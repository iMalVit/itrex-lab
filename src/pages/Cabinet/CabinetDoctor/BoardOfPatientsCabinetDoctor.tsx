import React from 'react';
import PatientCabinetDoctor from './PatientCabinetDoctor/PatientCabinetDoctor';

const BoardOfPatientsCabinetDoctor: React.FC<{ patients: any }> = (props) => (
  <>
    {props.patients.map((patient: any) => (
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
  </>
);

export default BoardOfPatientsCabinetDoctor;
