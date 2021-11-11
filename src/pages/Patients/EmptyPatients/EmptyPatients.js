import React from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import {
  Board,
  Content,
  PatientsButton,
  ResolutionsButton,
  BoardTitle,
} from "../common/Patients.style";
import { EmptyBox, EmptyBoxLogo, EmptyBoxText } from "./EmptyPatients.style";

const EmptyPatients = () => {
  return (
    <Content>
      <Header />
      <Board>
        <div>
          <a>
            <PatientsButton>Patients</PatientsButton>
          </a>
          <a>
            <ResolutionsButton>Resolutions</ResolutionsButton>
          </a>
        </div>

        <BoardTitle>My Patients</BoardTitle>
        <EmptyBox>
          <EmptyBoxLogo />
          <EmptyBoxText>
            You have no patients yet. <br />
            To create a patient profile, please contact your administrator.
          </EmptyBoxText>
        </EmptyBox>
      </Board>
      <Footer />
    </Content>
  );
};

export default EmptyPatients;
