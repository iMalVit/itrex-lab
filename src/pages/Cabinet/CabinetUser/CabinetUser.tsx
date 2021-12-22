import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments, selectAppointmentsStatus } from '../../../store/slices';
import CabinetUserBoardsOfAppointments from './CabinetUserBoardsOfAppointments';
import { Button } from '../../../components/Button/Button';

import { Board, BoardTitle, BoardBox } from '../common/common.style';
import { ButtonsWrapper, ToolBox } from './CabinetUser.style';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';
import CabinetEmptyBoard from '../CabinetEmptyBoard/CabinetEmptyBoard';
import { SkeletonCards } from '../../../components';

const PatientsUserView = () => {
  const history = useHistory();
  const appointments = useAppSelector(selectAppointmentsAppointments);
  const appointmentsStatus = useAppSelector(selectAppointmentsStatus);

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };

  return (
    <Board>
      <ButtonsWrapper>
        <Button variant="secondary" size="small">
          {dictionary.cabinetPatientPage.buttonProfile}
        </Button>
        <Button variant="primary" size="small">
          {dictionary.cabinetPatientPage.buttonAppointments}
        </Button>
        <Link to={PATH.RESOLUTIONS_FOR_PATIENT}>
          <Button variant="secondary" size="small">
            {dictionary.cabinetDoctorPage.buttonResolutions}
          </Button>
        </Link>
      </ButtonsWrapper>
      <ToolBox>
        <BoardTitle>{dictionary.cabinetPatientPage.title}</BoardTitle>
        <Button
          variant="primary"
          iconLeft="plus"
          size="large"
          onClick={handleClick}
        >
          {dictionary.cabinetPatientPage.createAppointments}
        </Button>
      </ToolBox>
      {appointmentsStatus === 'success' ? (
        <BoardBox>
          <CabinetUserBoardsOfAppointments appointments={appointments} />
        </BoardBox>
      ) : <SkeletonCards />}
      {(appointments.length === 0 && appointmentsStatus === 'success') ? <CabinetEmptyBoard /> : null}
    </Board>
  );
};

export default PatientsUserView;
