import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import BoardOfDoctorsCabinetUser from "./BoardOfDoctorsCabinetUser";
import { Button } from "../../../components/Button/Button.style";

import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { ButtonsWrapper, ToolBox } from "./CabinetUser.style";

import { useHistory } from "react-router";
import { PATH } from "../../../routes/routes";

const PatientsUserView = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };

  return (
    <Content>
      <Header
        name="Larry Prinston"
        profession="Patient"
        avatar="/assets/avatars/avatarPatient.png"
      ></Header>
      <Board>
        <ButtonsWrapper>
          <a>
            <Button variant="secondary" size="small">
              Profile
            </Button>
          </a>
          <a>
            <Button variant="primary" size="small">
              Appointments
            </Button>
          </a>
          <a>
            <Button variant="secondary" size="small" noneOnMobile>
              Resolutions
            </Button>
          </a>
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
      <Footer></Footer>
    </Content>
  );
};

export default PatientsUserView;
