import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dictionary from '../../../../../common/dictionary';
import { useAppDispatch } from '../../../../../hooks';
import createResolution from '../../../../../store/actions/createResolution.actions';
import {
  ResolutionModalBody, ResolutionModalTextArea, ResolutionModalTitle, ResolutionTextareaTitle, SelectedPatientImage, SelectedPatientInfo, ModalContent, ModalWrapper,
} from './Modal.style';

interface ModalPropsType {
  firstName: string
  lastName: string
  photo: string
  appointmentID: string
  onClose: () => void
}

const Modal: React.FC<ModalPropsType> = (props) => {
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
          <ResolutionModalTitle>{dictionary.cabinetDoctorPage.modalCreateResolution}</ResolutionModalTitle>
          <SelectedPatientInfo>
            <SelectedPatientImage src={props.photo} alt="patient`s avatar" />
            <span>
              {props.firstName}
              {' '}
              {props.lastName}
            </span>
          </SelectedPatientInfo>
          <ResolutionTextareaTitle>{dictionary.cabinetDoctorPage.modalResolution}</ResolutionTextareaTitle>
          <ResolutionModalTextArea value={resolutionText} onChange={(event) => setResolutionText(event.target.value)} />
          <button type="submit" onClick={props.onClose}>{dictionary.cabinetDoctorPage.modalCloseButton}</button>
          <button type="submit" onClick={handlerSubmit}>{dictionary.cabinetDoctorPage.modalSubmitButton}</button>
        </ResolutionModalBody>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
