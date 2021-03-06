import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dictionary from '../../../../../common/dictionary';
import { Button } from '../../../../../components';
import { useAppDispatch } from '../../../../../hooks';
import { createResolution } from '../../../../../store/actions';
import {
  ResolutionModalBody,
  ResolutionModalTextArea,
  ResolutionModalTitle,
  ResolutionTextareaTitle,
  SelectedPatientImage,
  SelectedPatientInfo,
  ModalContent,
  ModalWrapper,
  ResolutionModalFooter,
} from './Modal.style';

interface ModalPropsType {
  firstName: string;
  lastName: string;
  photo: string;
  appointmentID: string;
  onClose: () => void;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  const [resolutionText, setResolutionText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      createResolution.pending({
        resolution: resolutionText,
        appointmentID: props.appointmentID,
      }),
    );
    props.onClose();
  };

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <ResolutionModalBody>
          <ResolutionModalTitle>
            {dictionary.cabinetDoctorPage.modalCreateResolution}
          </ResolutionModalTitle>
          <SelectedPatientInfo>
            <SelectedPatientImage src={props.photo} alt="patient`s avatar" />
            <span>
              {props.firstName}
              {' '}
              {props.lastName}
            </span>
          </SelectedPatientInfo>
          <ResolutionTextareaTitle>
            {dictionary.cabinetDoctorPage.modalResolution}
          </ResolutionTextareaTitle>
          <ResolutionModalTextArea
            value={resolutionText}
            onChange={(event) => setResolutionText(event.target.value)}
          />
        </ResolutionModalBody>
        <ResolutionModalFooter>
          <Button
            iconLeft="close"
            variant="secondary"
            size="large"
            type="submit"
            onClick={props.onClose}
          >
            {dictionary.cabinetDoctorPage.modalCloseButton}
          </Button>
          <Button
            iconLeft="board"
            variant="primary"
            size="large"
            type="submit"
            onClick={handleSubmit}
          >
            {dictionary.cabinetDoctorPage.modalSubmitButton}
          </Button>
        </ResolutionModalFooter>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
