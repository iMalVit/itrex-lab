import React from "react";

import BoardOfDoctorsCabinetUser from "./BoardOfDoctorsCabinetUser";
import { Button } from "../../../components/Button/Button.style";

import {  Board, BoardTitle, BoardBox } from "../common/common.style";
import { ButtonsWrapper, ToolBox } from "./CabinetUser.style";
import { useHistory } from "react-router";
import { PATH } from "../../../routes/routes";
import { Link } from "react-router-dom";

const PatientsUserView = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };


  return (
      <Board>
        <ButtonsWrapper>
          <Link to>
            <Button variant="secondary" size="small">
              Profile
            </Button>
          </Link>
          <Link to>
            <Button variant="primary" size="small">
              Appointments
            </Button>
          </Link>
          <Link to>
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
          <BoardOfDoctorsCabinetUser doctors={props.doctors} />
        </BoardBox>
      </Board>
  );
};

export default PatientsUserView;
