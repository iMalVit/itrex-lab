import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import {
  Board,
  Content,
  PatientsButton,
  ResolutionsButton,
  BoardTitle,
} from "../common/common.style";
import {
  EmptyBox,
  EmptyBoxLogo,
  EmptyBoxText,
} from "./CabinetDoctorEmpty.style";

const EmptyPatients = () => {
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
