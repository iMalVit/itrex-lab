import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Board, Content, BoardTitle } from '../common/common.style';
import {
  EmptyBox,
  EmptyBoxLogo,
  EmptyBoxText,
  ButtonsWrapper,
} from './CabinetDoctorEmpty.style';
import Button from '../../../components/Button/Button.style';

const EmptyPatients = () => (
  <Content>
    <Header
      userInfo=""
    />
    <Board>
      <ButtonsWrapper>
        <Button variant="primary" size="small">
          Patients
        </Button>
        <Button variant="secondary" size="small">
          Resolutions
        </Button>
      </ButtonsWrapper>

      <BoardTitle>My Patients</BoardTitle>
      <EmptyBox>
        <EmptyBoxLogo />
        <EmptyBoxText>
          You have no patients yet.
          {' '}
          <br />
          To create a patient profile, please contact your administrator.
        </EmptyBoxText>
      </EmptyBox>
    </Board>
    <Footer />
  </Content>
);

export default EmptyPatients;
