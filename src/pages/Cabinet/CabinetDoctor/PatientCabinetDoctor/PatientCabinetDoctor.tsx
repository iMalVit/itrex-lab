import React from 'react';
import ControlCardPanel from './components/ControlCardPanel/ControlCardPanel';
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
  PatientInfo,
  DescriptionBoxDocument,
  Wrapper,
} from './PatientCabinetDoctor.style';

const PatientCabinetDoctor: React.FC<{ imageSrc: any, firstName: any, lastName: any, status: any, date: any, time: any, description: any, appointmentId:any }> = (props) => {
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
        <Avatar src={props.imageSrc} alt="patient avatar" />

        <DescriptionBox>
          <PatientName>
            {props.firstName}
            {' '}
            {props.lastName}
          </PatientName>
          <Status>
            <StatusIcon status={props.status} />
            <StatusText>{props.status}</StatusText>
          </Status>
          <ControlCardPanel appointmentData={{
            firstName: props.firstName, lastName: props.lastName, id: props.appointmentId, photo: props.imageSrc,
          }}
          />
        </DescriptionBox>
      </MainInfo>
      <PatientInfo>
        <Wrapper>
          <img src="/assets/icons/time.svg" alt="time icon" />
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
            src="/assets/icons/document.svg"
            alt="patient__document-icon"
          />
          <PatientDocumentText>{props.description}</PatientDocumentText>
        </DescriptionBoxDocument>
      </PatientInfo>
    </PatientBox>
  );
};

export default PatientCabinetDoctor;
