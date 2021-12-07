import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import BoardOfDoctorsCabinetUser from "./BoardOfDoctorsCabinetUser";
import { Button } from "../../../components/Button/Button.style";

import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { ButtonsWrapper, ToolBox } from "./CabinetUser.style";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { useHistory } from "react-router";
import { PATH } from "../../../routes/routes";
import { Link } from "react-router-dom";

const PatientsUserView = (props) => {
  const history = useHistory();
  const userInfo = useAppSelector((state) => state.profile);

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };

  const dispatch = useAppDispatch();

  return (
    <Content>
      <Header userInfo={userInfo}></Header>
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
      <Footer></Footer>
    </Content>
  );
};

export default PatientsUserView;
