import React from 'react';
import { Link } from 'react-router-dom';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import Button from '../../../components/Button/Button.style';
import CabinetDoctorBoardsOfAppointments from './CabinetDoctorBoardsOfAppointments';
import ButtonsWrapper from './CabinetDoctor.style';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';

const CabinetDoctor = () => (
  <Board>
    <ButtonsWrapper>
      <Button variant="primary" size="small">
        {dictionary.cabinetDoctorPage.buttonPatients}
      </Button>
      <Link to={PATH.RESOLUTIONS_FOR_DOCTOR}>
        <Button variant="secondary" size="small">
          {dictionary.cabinetDoctorPage.buttonResolutions}
        </Button>
      </Link>
    </ButtonsWrapper>
    <BoardTitle>{dictionary.cabinetDoctorPage.patientsTitle}</BoardTitle>
    <BoardBox>
      <CabinetDoctorBoardsOfAppointments />
    </BoardBox>
  </Board>
);

export default CabinetDoctor;
