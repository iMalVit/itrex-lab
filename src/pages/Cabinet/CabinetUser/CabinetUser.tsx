import React from 'react';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../../hooks';
import { selectAppointmentsAppointments } from '../../../store/slices';
import CabinetUserBoardsOfAppointments from './CabinetUserBoardsOfAppointments';
import { Button } from '../../../components/Button/Button';

import { Board, BoardTitle, BoardBox } from '../common/common.style';
import { ButtonsWrapper, ToolBox } from './CabinetUser.style';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';
import CabinetEmptyBoard from '../CabinetEmptyBoard/CabinetEmptyBoard';

const PatientsUserView = () => {
  const history = useHistory();
  const appointments = useAppSelector(selectAppointmentsAppointments);

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
        <Button variant="secondary" size="small">
          {dictionary.cabinetPatientPage.buttonResolutions}
        </Button>
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
      {appointments.length > 0 ? (
        <BoardBox>
          <CabinetUserBoardsOfAppointments appointments={appointments} />
        </BoardBox>
      ) : <CabinetEmptyBoard />}
    </Board>
  );
};

export default PatientsUserView;
