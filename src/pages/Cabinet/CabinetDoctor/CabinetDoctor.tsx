import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { Button } from "../../../components/Button/Button.style";
import BoardOfPatientsCabinetDoctor from "./BoardOfPatientsCabinetDoctor";
import { ButtonsWrapper } from "./CabinetDoctor.style";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../hooks";
import { useAppSelector } from "../../../hooks";

const Patients = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.profile);

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
