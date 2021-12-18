import React, { useState, useRef, useEffect } from 'react';
import { SettingsButton } from '../AppointmentCard/AppointmentCard.style';
import {
  CommandsList,
  ControlCommand,
} from './ControlCardPanel.styles';
import Modal from '../Modal/Modal';
import useAppointment from '../../../../../store/hooks/useAppointment';
import dictionary from '../../../../../common/dictionary';

interface ControlCardPropsType {
  appointmentData: {
    id: string
    firstName: string
    lastName: string
    photo: string
  }
}

const ControlCardPanel: React.FC<ControlCardPropsType> = (props) => {
  const { deleteAppointment } = useAppointment();
  const [showControlCardPanel, setShowControlCardPanel] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const ref: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    const checkIfClickOutside = (event:any) => {
      if (showControlCardPanel && ref.current && !ref.current.contains(event.target)) {
        setShowControlCardPanel(false);
      }
    };
    document.addEventListener('click', checkIfClickOutside);
    return () => {
      document.removeEventListener('click', checkIfClickOutside);
    };
  }, [showControlCardPanel]);

  return (
    <div ref={ref}>
      <SettingsButton onClick={() => setShowControlCardPanel(!showControlCardPanel)} />
      {showControlCardPanel && (
      <CommandsList>
        <ControlCommand onClick={() => {
          setIsModalOpen(true);
          setShowControlCardPanel(false);
        }}
        >
          {dictionary.cabinetDoctorPage.controlCommandCreate}
        </ControlCommand>
        <ControlCommand>{dictionary.cabinetDoctorPage.controlCommandEdit}</ControlCommand>
        <ControlCommand onClick={() => deleteAppointment({ id: props.appointmentData.id })}>{dictionary.cabinetDoctorPage.controlCommandDelete}</ControlCommand>
      </CommandsList>
      )}
      {isModalOpen && <Modal firstName={props.appointmentData.firstName} lastName={props.appointmentData.lastName} photo={props.appointmentData.photo} appointmentID={props.appointmentData.id} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ControlCardPanel;
