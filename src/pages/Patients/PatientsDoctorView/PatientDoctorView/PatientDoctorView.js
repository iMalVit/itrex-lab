import React from "react";
import {
  PatientBox,
  Avatar,
  MainInfo,
  Status,
  StatusText,
  PatientDocumentText,
  PatientDocumentIcon,
  PatientTimeText,
  PatientName,
  DescriptionBox,
  StatusIcon,
  PaitentInfo,
  DescriptionBoxDocument,
} from "./PatientDoctorView.style";

const Patient = (props) => {
  const displayFlex = {
    display: "flex",
  };
  const timeHelper = (param) => {
    const date = new Date(param);
    return date.toString().substr(0, 16);
  };

  return (
    <PatientBox>
      <MainInfo>
        <Avatar src={props.imageSrc} alt="patient__avatar" />

        <DescriptionBox>
          <PatientName>
            {props.firstName} {props.lastName}
          </PatientName>
          <Status>
            <StatusIcon status={props.status}></StatusIcon>
            <StatusText>Appointment is confirmed</StatusText>
          </Status>
        </DescriptionBox>
      </MainInfo>
      <PaitentInfo>
        <div style={displayFlex}>
          <img src="/assets/icons/time.svg" alt="patients__time-icon" />
          <PatientTimeText>
            {timeHelper(props.time)} 4 pm – 5 pm
          </PatientTimeText>
        </div>
        <DescriptionBoxDocument>
          <PatientDocumentIcon
            src="/assets/icons/document.svg"
            alt="patient__document-icon"
          />
          <PatientDocumentText>{props.description}</PatientDocumentText>
        </DescriptionBoxDocument>
      </PaitentInfo>
    </PatientBox>
  );
};

export default Patient;
