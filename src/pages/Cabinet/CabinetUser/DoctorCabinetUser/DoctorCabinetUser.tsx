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
  Wrapper,
} from '../../CabinetDoctor/PatientCabinetDoctor/PatientCabinetDoctor.style';
import Profession from './DoctorCabinetUser.style';

const DoctorCabinetUser = (props: any) => {
  const UTC_DIFF = 3;
  const HOURS_IN_DAY = 12;
  const HOURS_DIFF = 1;

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
        <Wrapper>
          <img src="/assets/icons/time.svg" alt="patients__time-icon" />
          <PatientTimeText>
            {timeHelper(props.date)}
            {' '}
            {props.time - UTC_DIFF}
            {' '}
            {Number(props.time) - UTC_DIFF < HOURS_IN_DAY ? 'am' : 'pm'}
            {' '}
            –
            {' '}
            {Number(props.time - UTC_DIFF) + HOURS_DIFF}
            {' '}
            {Number(props.time) - UTC_DIFF + HOURS_DIFF < HOURS_IN_DAY ? 'am' : 'pm'}
          </PatientTimeText>
        </Wrapper>
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
