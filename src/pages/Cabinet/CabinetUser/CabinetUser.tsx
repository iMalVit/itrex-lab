import React from 'react';
import { useHistory } from 'react-router';

import BoardOfDoctorsCabinetUser from './BoardOfDoctorsCabinetUser';
import Button from '../../../components/Button/Button.style';

import { Board, BoardTitle, BoardBox } from '../common/common.style';
import { ButtonsWrapper, ToolBox } from './CabinetUser.style';
import PATH from '../../../routes/routes';

const PatientsUserView = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };

  return (
    <Board>
      <ButtonsWrapper>
        <Button variant="secondary" size="small">
          Profile
        </Button>
        <Button variant="primary" size="small">
          Appointments
        </Button>
        <Button variant="secondary" size="small">
          Resolutions
        </Button>
      </ButtonsWrapper>
      <ToolBox>
        <BoardTitle>My Appointments</BoardTitle>
        <Button
          variant="primary"
          iconLeft="plus"
          size="large"
          onClick={handleClick}
        >
          Create an appointment
        </Button>
      </ToolBox>
      <BoardBox>
        <BoardOfDoctorsCabinetUser />
      </BoardBox>
    </Board>
  );
};

export default PatientsUserView;
