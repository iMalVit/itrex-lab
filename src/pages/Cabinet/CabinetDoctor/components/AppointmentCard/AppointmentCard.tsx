import React from 'react';
import { renderTime } from '../../../../../utils/convertTime.util';
import ControlCardPanel from '../ControlCardPanel/ControlCardPanel';
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
} from './AppointmentCard.style';

interface AppointmentCardPropsType {
  firstName: string
  lastName: string
  status: string
  date: Date
  time: number
  description: string
  appointmentId: string
  imageSrc: string
}

const AppointmentCard: React.FC<AppointmentCardPropsType> = (props) => (
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
          {renderTime(props.date, props.time)}
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

export default AppointmentCard;
