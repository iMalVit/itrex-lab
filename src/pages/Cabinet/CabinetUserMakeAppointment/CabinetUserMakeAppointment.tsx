import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Content } from '../common/common.style';
import {
  Navigation,
  MainTitle,
  ArrowNavigationIcon,
  SubTitle,
  Board,
  PageTitle,
} from './CabinetUserMakeAppointment.style';
import CabinetUserMakeAppointmentForm from './form/CabinetUserMakeAppointmentForm';
import { useAppSelector } from '../../../hooks';

const CabinetUserMakeAppointment = () => {
  const userInfo = useAppSelector((state) => state.profile);
  return (
    <Content>
      <Header userInfo={userInfo} />
      <Board>
        <Navigation>
          <MainTitle>Doctors</MainTitle>
          <ArrowNavigationIcon />
          <SubTitle>Make an appointment</SubTitle>
        </Navigation>
        <PageTitle>Make an appointment</PageTitle>
        <CabinetUserMakeAppointmentForm />
      </Board>
      <Footer />
    </Content>
  );
};

export default CabinetUserMakeAppointment;
