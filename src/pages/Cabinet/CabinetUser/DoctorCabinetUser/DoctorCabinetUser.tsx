import React from 'react';
import {
  PatientBox,
  MainInfo,
  Avatar,
  DescriptionBox,
  PatientName,
  PatientInfo,
  PatientTimeText,
  DescriptionBoxDocument,
  PatientDocumentText,
  PatientDocumentIcon,
} from '../../CabinetDoctor/PatientCabinetDoctor/PatientCabinetDoctor.style';
import Profession from './DoctorCabinetUser.style';

const DoctorCabinetUser = (props: any) => {
  const displayFlex = {
    display: 'flex',
  };
  const timeHelper = (param: any) => {
    const date = new Date(param);
    return date.toString().substr(0, 16);
  };

  return (
    <PatientBox>
      <MainInfo>
        <Avatar src={props.imageSrc} alt="patient__avatar" />

        <DescriptionBox>
          <PatientName>
            {props.firstName}
            {' '}
            {props.lastName}
          </PatientName>
          <Profession>{props.occupation}</Profession>
        </DescriptionBox>
      </MainInfo>
      <PatientInfo>
        <div style={displayFlex}>
          <img src="/assets/icons/time.svg" alt="patients__time-icon" />
          <PatientTimeText>
            {timeHelper(props.date)}
            {' '}
            {props.time - 3}
            {' '}
            {Number(props.time) - 3 < 12 ? 'am' : 'pm'}
            {' '}
            –
            {' '}
            {Number(props.time - 3) + 1}
            {' '}
            {Number(props.time) - 3 + 1 < 12 ? 'am' : 'pm'}
          </PatientTimeText>
        </div>
        <DescriptionBoxDocument>
          <PatientDocumentIcon
            src="/assets/icons/Illness.svg"
            alt="patient__document-icon"
          />
          <PatientDocumentText>{props.description}</PatientDocumentText>
        </DescriptionBoxDocument>
      </PatientInfo>
    </PatientBox>
  );
};

export default DoctorCabinetUser;
