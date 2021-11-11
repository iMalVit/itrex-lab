import React from "react";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { doctors } from "../Model/Model";
import BoardOfPatientsUserView from "./BoardOfPatientsUserView";
import { Button } from "../../common/styles/button.style";

import { Content, Board, BoardTitle, BoardBox } from "../common/Patients.style";

const PatientsUserView = () => {
  return (
    <Content>
      <Header
        name="Larry Prinston"
        profession="Patient"
        avatar="/assets/avatars/avatarPatient.png"
      ></Header>
      <Board>
        <div>
          <a>
            <Button secondary small>
              Profile
            </Button>
          </a>
          <a>
            <Button
              primary
              small
              marginBottom="61px"
              marginLeft="12px"
              marginRight="12px"
            >
              Appointments
            </Button>
          </a>
          <a>
            <Button secondary small noneOnMobile>
              Resolutions
            </Button>
          </a>
        </div>
        <BoardTitle>My Appointments</BoardTitle>
        <BoardBox>
          <BoardOfPatientsUserView doctors={doctors} />
        </BoardBox>
      </Board>
      <Footer></Footer>
    </Content>
  );
};

export default PatientsUserView;
