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
} from './CabinetUserMakeAnAppointment.style';
import CabinetUserMakeAnAppointmentForm from './form/CabinetUserMakeAnAppointmentForm';
import { useAppSelector } from '../../../hooks';

const CabinetUserMakeAnAppointment = () => {
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
        <CabinetUserMakeAnAppointmentForm />
      </Board>
      <Footer />
    </Content>
  );
};

export default CabinetUserMakeAnAppointment;
