import React, { useState } from 'react';
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
  SettingsButton,
} from './PatientCabinetDoctor.style';

const PatientCabinetDoctor: React.FC<{ imageSrc: any, firstName: any, lastName: any, status: any, date: any, time: any, description: any }> = (props) => {
  const [showControlCardPanel, setShowControlCardPanel] = useState<boolean>(false);
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
          <SettingsButton onClick={() => setShowControlCardPanel(!showControlCardPanel)} />
          {/* {showControlCardPanel && (<ControlCardPanel />)} */}

        </DescriptionBox>
      </MainInfo>
      <PatientInfo>
        <div style={displayFlex}>
          <img src="/assets/icons/time.svg" alt="time icon" />
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
