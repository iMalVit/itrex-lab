import React from 'react';
import { renderTime } from '../../../../../utils/convertTime.util';
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
} from '../../../CabinetDoctor/components/AppointmentCard/AppointmentCard.style';
import Profession from './AppointmentCard.style';

const AppointmentCard = (props: any) => (
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
        <img src="/assets/icons/time.svg" alt="time" />
        <PatientTimeText>
          {renderTime(props.date, props.time)}
        </PatientTimeText>
      </Wrapper>
      <DescriptionBoxDocument>
        <PatientDocumentIcon
          src="/assets/icons/reason.svg"
          alt="reason"
        />
        <PatientDocumentText>{props.description}</PatientDocumentText>
      </DescriptionBoxDocument>
    </PatientInfo>
  </PatientBox>
);

export default AppointmentCard;
