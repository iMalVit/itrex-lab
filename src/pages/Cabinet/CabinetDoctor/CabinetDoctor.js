import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import { patients } from "../../../mock/patients";
import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";
import { Button } from "../../../components/Button/Button.style";
import BoardOfPatientsCabinetDoctor from "./BoardOfPatientsCabinetDoctor";

const Patients = () => {
  return (
    <Content>
      <Header
        name="Miranda Nelson"
        profession="Doctor"
        avatar="/assets/avatars/avatar.png"
      />
      <Board>
        <div>
          <a>
            <Button primary small marginRight="12px" marginBottom="56px">
              Patients
            </Button>
          </a>
          <a>
            <Button secondary small>
              Resolutions
            </Button>
          </a>
        </div>
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
