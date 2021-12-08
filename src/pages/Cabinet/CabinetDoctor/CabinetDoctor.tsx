/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import Button from '../../../components/Button/Button.style';
import BoardOfPatientsCabinetDoctor from './BoardOfPatientsCabinetDoctor';
import ButtonsWrapper from './CabinetDoctor.style';

const Patients = () => (
  <Board>
    <ButtonsWrapper>
      <a>
        <Button variant="primary" size="small">
          Patients
        </Button>
      </a>
      <a>
        <Button variant="secondary" size="small">
          Resolutions
        </Button>
      </a>
    </ButtonsWrapper>
    <BoardTitle>My Patients</BoardTitle>
    <BoardBox>
      <BoardOfPatientsCabinetDoctor patients={[]} />
    </BoardBox>
  </Board>
);

export default Patients;
