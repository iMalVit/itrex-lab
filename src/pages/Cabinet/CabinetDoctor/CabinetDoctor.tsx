import React from 'react';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import Button from '../../../components/Button/Button.style';
import BoardOfPatientsCabinetDoctor from './BoardOfPatientsCabinetDoctor';
import ButtonsWrapper from './CabinetDoctor.style';

const Patients = () => (
  <Board>
    <ButtonsWrapper>
      <Button variant="primary" size="small">
        Patients
      </Button>
      <Button variant="secondary" size="small">
        Resolutions
      </Button>
    </ButtonsWrapper>
    <BoardTitle>My Patients</BoardTitle>
    <BoardBox>
      <BoardOfPatientsCabinetDoctor />
    </BoardBox>
  </Board>
);

export default Patients;
