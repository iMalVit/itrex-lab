import React from 'react';
import { Link } from 'react-router-dom';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import Button from '../../../components/Button/Button.style';
import BoardOfPatientsCabinetDoctor from './BoardOfPatientsCabinetDoctor';
import ButtonsWrapper from './CabinetDoctor.style';
import PATH from '../../../routes/routes';

const Patients = () => (
  <Board>
    <ButtonsWrapper>
      <Button variant="primary" size="small">
        Patients
      </Button>
      <Link to={PATH.RESOLUTIONS_FOR_DOCTOR}>
        <Button variant="secondary" size="small">
          Resolutions
        </Button>
      </Link>
    </ButtonsWrapper>
    <BoardTitle>My Patients</BoardTitle>
    <BoardBox>
      <BoardOfPatientsCabinetDoctor />
    </BoardBox>
  </Board>
);

export default Patients;
