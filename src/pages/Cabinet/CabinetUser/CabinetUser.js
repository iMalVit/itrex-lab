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
import SuccessMessage from "../../../components/StatusMessages/SuccessMessage";
import ErrorMessage from "../../../components/StatusMessages/ErrorMessage";
import { MessageBox } from "../../../components/StatusMessages/MessageBox.style";
import { statusMessageActions } from "../../../store/statusMessageSlice.js";
import { Link } from "react-router-dom";

const PatientsUserView = (props) => {
  const history = useHistory();
  const userInfo = useAppSelector((state) => state.profile);

  const handleClick = () => {
    history.push(PATH.CABINET_USER_MAKE_AN_APPOINTMENT);
  };

  const dispatch = useAppDispatch();

  const messageStatus = useAppSelector((state) => state.statusMessage);

  const timeout = () =>
    setTimeout(() => {
      dispatch(statusMessageActions.setUndefinedStatus());
    }, 3000);

  return (
    <Content>
      {messageStatus.status && timeout() && (
        <MessageBox>
          <SuccessMessage></SuccessMessage>
        </MessageBox>
      )}
      {messageStatus.status === false && timeout() && (
        <MessageBox>
          <ErrorMessage errorMessage={messageStatus.error}></ErrorMessage>
        </MessageBox>
      )}
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
