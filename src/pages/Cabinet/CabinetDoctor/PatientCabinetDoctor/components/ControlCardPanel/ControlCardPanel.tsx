/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { SettingsButton } from '../../PatientCabinetDoctor.style';
import {
  CommandsList,
  ControlCommand,
} from './ControlCardPanel.styles';
import Modal from '../Modal/Modal';
import { useAppDispatch } from '../../../../../../hooks';
import deleteAppointment from '../../../../../../store/actions/deleteAppointment.actions';
import useDeleteAppointment from '../../../../../../store/hooks/useDeleteAppointment';

const ControlCardPanel = (props:any) => {
  const { eraseAppointment } = useDeleteAppointment();
  const dispatch = useAppDispatch();
  const [showControlCardPanel, setShowControlCardPanel] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const ref:any = useRef();
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
        Create a resolution
</ControlCommand>
      <ControlCommand>Edit an appointment</ControlCommand>
        <ControlCommand onClick={() => dispatch(deleteAppointment.pending({ id: props.appointmentData.id }))}>Delete</ControlCommand>
      </CommandsList>)}
      {isModalOpen && <Modal firstName={props.appointmentData.firstName} lastName={props.appointmentData.lastName} photo={props.appointmentData.photo} appointmentID={props.appointmentData.id} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ControlCardPanel;
