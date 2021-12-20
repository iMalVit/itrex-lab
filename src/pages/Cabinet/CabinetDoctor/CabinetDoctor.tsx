import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments } from '../../../store/slices/appointments.slice';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import Button from '../../../components/Button/Button';
import CabinetDoctorBoardsOfAppointments from './CabinetDoctorBoardsOfAppointments';
import ButtonsWrapper from './CabinetDoctor.style';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';
import CabinetEmptyBoard from '../CabinetEmptyBoard/CabinetEmptyBoard';

const CabinetDoctor = () => {
  const appointments = useAppSelector(selectAppointmentsAppointments);
  return (
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
      {appointments.length > 0 ? (
        <BoardBox>
          <CabinetDoctorBoardsOfAppointments appointments={appointments} />
        </BoardBox>
      ) : <CabinetEmptyBoard />}
    </Board>
  );
};
export default CabinetDoctor;
