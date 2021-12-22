import React from 'react';
import { Header, Footer } from '../../../components';
import { Content } from '../common/common.style';
import {
  Navigation,
  MainTitle,
  ArrowNavigationIcon,
  SubTitle,
  Board,
  PageTitle,
  StyledLink,
} from './CabinetUserMakeAppointment.style';
import CabinetUserMakeAppointmentForm from './form/CabinetUserMakeAppointmentForm';
import { useAppSelector } from '../../../hooks';
import { selectProfileData } from '../../../store/slices';
import PATH from '../../../routes/routes';
import dictionary from '../../../common/dictionary';

export const CabinetUserMakeAppointment = () => {
  const userInfo = useAppSelector(selectProfileData);
  return (
    <Content>
      <Header userInfo={userInfo} />
      <Board>
        <Navigation>
          <MainTitle>
            <StyledLink to={PATH.CABINET}>{dictionary.cabinetPatientPage.buttonDoctors}</StyledLink>
          </MainTitle>
          <ArrowNavigationIcon />
          <SubTitle>{dictionary.cabinetPatientPage.makeAppointmentTitle}</SubTitle>
        </Navigation>
        <PageTitle>{dictionary.cabinetPatientPage.makeAppointmentTitle}</PageTitle>
        <CabinetUserMakeAppointmentForm />
      </Board>
      <Footer />
    </Content>
  );
};
