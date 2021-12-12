import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../components/common/theme';

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: url("../../../assets/images/bg.png");
  background-size: cover;
  height: 100vh;
  min-height: 680px;

  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 800px;

    background: url("../../../assets/images/bg-small.png");
    background-size: contain;
  }

  @media (max-width: 400px) {
    min-height: 672px;
  }

  @media (max-height: 667px) {
    min-height: 100vh;
  }
`;

export const Content = styled.main`
  height: 100%;
  width: 560px;
  background: ${colors.gray_light};
  min-height: 680px;

  @media (max-width: 700px) {
    margin-top: 72px;
    width: 100%;
    border-radius: 24px 24px 0 0;
    min-height: 600px;
  }

  @media (max-height: 667px) {
    min-height: 80vh;
  }

  @media (max-height: 530px) {
    min-height: 320px;
  }
`;

export const Form = styled.form`
  padding-top: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 120px;

  @media (max-height: 950px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  @media (max-height: 800px) {
    padding-bottom: 20px;
    gap: 24px;
  }
  @media (max-width: 700px) {
    padding-top: 32px;
    padding-bottom: 72px;
  }

  @media (max-width: 400px) {
    gap: 24px;
  }

  /* Only this page */
  @media (max-height: 400px) {
    padding-bottom: 0;
  }
`;

export const FormLabel = styled.div`
  display: flex;
`;

export const FormTitle = styled.label`
  height: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};

  width: 328px;

  @media (max-width: 400px) {
    width: 256px;
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 300px) {
    width: 180px;
    font-size: 17px;
  }
`;

export const FormDescription = styled.div`
  margin-top: -8px;
  width: 368px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 19px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray_medium};

  @media (max-width: 400px) {
    width: 256px;
  }

  @media (max-width: 300px) {
    width: 150px;
    font-size: 13px;
  }
`;

export const BackLink = styled(Link)`
  width: 24px;
  height: 24px;
  text-decoration: none;
  margin-right: 16px;
`;

export const EnteredEmail = styled.a`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;

  text-decoration-line: underline;

  color: ${colors.blue};
`;
