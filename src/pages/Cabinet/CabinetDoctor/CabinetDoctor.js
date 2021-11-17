import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { patients } from "../../../mock/patients";
import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { Button } from "../../../components/Button/Button.style";
import BoardOfPatientsCabinetDoctor from "./BoardOfPatientsCabinetDoctor";
import { ButtonsWrapper } from "./CabinetDoctor.style";

const Patients = () => {
  return (
    <Content>
      <Header
        name="Miranda Nelson"
        profession="Doctor"
        avatar="/assets/avatars/avatar.png"
      />
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
          <BoardOfPatientsCabinetDoctor patients={patients} />
        </BoardBox>
      </Board>
      <Footer />
    </Content>
  );
};

export default Patients;
