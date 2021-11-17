import React from "react";
import {
  PatientBox,
  MainInfo,
  Avatar,
  DescriptionBox,
  PatientName,
  PaitentInfo,
  PatientTimeText,
  DescriptionBoxDocument,
  PatientDocumentText,
  PatientDocumentIcon,
} from "../../CabinetDoctor/PatientCabinetDoctor/PatientCabinetDoctor.style";
import { Profession } from "./DoctorCabinetUser.style";

const DoctorCabinetUser = (props) => {
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
          <Profession>{props.occupation}</Profession>
        </DescriptionBox>
      </MainInfo>
      <PaitentInfo>
        <div style={displayFlex}>
          <img src="/assets/icons/time.svg" alt="patients__time-icon" />
          <PatientTimeText>
            {timeHelper(props.date)} {props.time} pm – {Number(props.time) + 1}{" "}
            pm
          </PatientTimeText>
        </div>
        <DescriptionBoxDocument>
          <PatientDocumentIcon
            src="/assets/icons/Illness.svg"
            alt="patient__document-icon"
          />
          <PatientDocumentText>{props.description}</PatientDocumentText>
        </DescriptionBoxDocument>
      </PaitentInfo>
    </PatientBox>
  );
};

export default DoctorCabinetUser;