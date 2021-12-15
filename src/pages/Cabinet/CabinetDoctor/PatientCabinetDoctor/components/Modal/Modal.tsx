/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../../../../../hooks';
import createResolution from '../../../../../../store/actions/createResolution.actions';
import {
  ResolutionModalBody, ResolutionModalTextArea, ResolutionModalTitle, ResolutionTextareaTitle, SelectedPatientImage, SelectedPatientInfo,
} from '../Modal/Modal.style';
import { ModalContent, ModalWrapper } from './Modal.style';

const Modal = (props:any) => {
  const [resolutionText, setResolutionText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handlerSubmit = () => {
    dispatch(createResolution.pending({ resolution: resolutionText, appointmentID: props.appointmentID }));
    props.onClose();
  };

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <ResolutionModalBody>
          <ResolutionModalTitle>Create a resolution</ResolutionModalTitle>
          <SelectedPatientInfo>
            <SelectedPatientImage src={props.photo} alt="patient`s avatar" />
            <span>
              {props.firstName}
              {' '}
              {props.lastName}
            </span>
          </SelectedPatientInfo>
          <ResolutionTextareaTitle>Resolution</ResolutionTextareaTitle>
          <ResolutionModalTextArea value={resolutionText} onChange={(event) => setResolutionText(event.target.value)} />
          <button type="submit" onClick={props.onClose}>Close</button>
          <button type="submit" onClick={handlerSubmit}>Submit</button>
        </ResolutionModalBody>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
