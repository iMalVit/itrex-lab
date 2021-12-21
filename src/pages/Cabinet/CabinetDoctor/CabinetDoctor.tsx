import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments, selectAppointmentsStatus } from '../../../store/slices';
import { Board, BoardTitle, BoardBox } from '../common/common.style';
import { Button, SkeletonCards } from '../../../components';
import CabinetDoctorBoardsOfAppointments from './CabinetDoctorBoardsOfAppointments';
import ButtonsWrapper from './CabinetDoctor.style';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';
import CabinetEmptyBoard from '../CabinetEmptyBoard/CabinetEmptyBoard';

const CabinetDoctor = () => {
  const appointments = useAppSelector(selectAppointmentsAppointments);
  const appointmentsStatus = useAppSelector(selectAppointmentsStatus);

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
      {appointmentsStatus === 'success' ? (
        <BoardBox>
          <CabinetDoctorBoardsOfAppointments appointments={appointments} />
        </BoardBox>
      ) : <SkeletonCards />}
      {(appointments.length === 0 && appointmentsStatus === 'success') ? <CabinetEmptyBoard /> : null}
    </Board>
  );
};
export default CabinetDoctor;
