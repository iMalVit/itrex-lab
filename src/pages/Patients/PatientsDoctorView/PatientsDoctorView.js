import React from "react";
import Header from "../common/Header/Header";
import BoardOfPatients from "./BoardOfPatientsDoctorVIew";
import Footer from "../common/Footer/Footer";
import { patients } from "../Model/Model";
import { Content, Board, BoardTitle, BoardBox } from "../common/Patients.style";
import { Button } from "../../common/styles/button.style";

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
          <BoardOfPatients patients={patients} />
        </BoardBox>
      </Board>
      <Footer />
    </Content>
  );
};

export default Patients;
