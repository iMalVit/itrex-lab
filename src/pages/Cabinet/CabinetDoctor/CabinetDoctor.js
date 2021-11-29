import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { Button } from "../../../components/Button/Button.style";
import BoardOfPatientsCabinetDoctor from "./BoardOfPatientsCabinetDoctor";
import { ButtonsWrapper } from "./CabinetDoctor.style";
import { useHistory } from "react-router";
import { PATH } from "../../../routes/routes";
import { getUserProfile } from "../../../api/api.util";
import { userActions } from "../../../store/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Patients = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  if (sessionStorage.getItem("access_token")) {
    console.log(sessionStorage.getItem("access_token"));
    const token = sessionStorage.getItem("access_token");
    getUserProfile(token).then((res) =>
      dispatch(userActions.setCurrentUser(res.data))
    );
  } else {
    history.push(PATH.SIGN_IN);
  }

  return (
    <Content>
      <Header userInfo={userInfo} />
      <Board>
        <ButtonsWrapper>
          <a>
            <Button variant="primary" size="small">
              Patients
            </Button>
          </a>
          <a>
            <Button variant="secondary" size="small">
              Resolutions
            </Button>
          </a>
        </ButtonsWrapper>
        <BoardTitle>My Patients</BoardTitle>
        <BoardBox>
          <BoardOfPatientsCabinetDoctor patients={[]} />
        </BoardBox>
      </Board>
      <Footer />
    </Content>
  );
};

export default Patients;
