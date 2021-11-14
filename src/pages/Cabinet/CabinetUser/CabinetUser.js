import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import BoardOfDoctorsCabinetUser from "./BoardOfDoctorsCabinetUser";
import { Button } from "../../../components/Button/Button.style";

import { Content, Board, BoardTitle, BoardBox } from "../common/common.style";

const PatientsUserView = (props) => {
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
          <BoardOfDoctorsCabinetUser doctors={props.doctors} />
        </BoardBox>
      </Board>
      <Footer></Footer>
    </Content>
  );
};

export default PatientsUserView;
