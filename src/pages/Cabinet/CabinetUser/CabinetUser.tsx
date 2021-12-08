/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="">
          <Button variant="secondary" size="small">
            Profile
          </Button>
        </Link>
        <Link to="">
          <Button variant="primary" size="small">
            Appointments
          </Button>
        </Link>
        <Link to="">
          <Button variant="secondary" size="small" noneOnMobile>
            Resolutions
          </Button>
        </Link>
      </ButtonsWrapper>
      <ToolBox>
        <BoardTitle>My Appointments</BoardTitle>
        <Button
          variant="primary"
          iconLeft="plus"
          size="medium"
          width="244px"
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
