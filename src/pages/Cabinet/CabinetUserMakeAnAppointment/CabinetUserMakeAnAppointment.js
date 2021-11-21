import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Content } from "../common/common.style";
import {
  Navigation,
  MainTitle,
  ArrowNavigationIcon,
  SubTitle,
  Board,
  PageTitle,
} from "./CabinetUserMakeAnAppointment.style.";
import CabinetUserMakeAnAppointmentForm from "./form/CabinetUserMakeAnAppointmentForm";

const CabinetUserMakeAnAppointment = () => {
  return (
    <Content>
      <Header></Header>
      <Board>
        <Navigation>
          <MainTitle>Doctors</MainTitle>
          <ArrowNavigationIcon />
          <SubTitle>Make an appointment</SubTitle>
        </Navigation>
        <PageTitle>Make an appointment</PageTitle>
        <CabinetUserMakeAnAppointmentForm />
      </Board>
      <Footer />
    </Content>
  );
};

export default CabinetUserMakeAnAppointment;
