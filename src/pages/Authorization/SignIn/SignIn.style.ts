import styled from 'styled-components';
import { colors } from '../../../components/common/theme';

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
    min-height: 500px;
  }
`;

export const FormButtonSubmit = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  position: relative;
  color: ${colors.white};
  text-align: start;
  padding: 16px 24px;
  width: 138px;
  height: 56px;
  background: ${colors.blue};
  border-radius: 8px;
  border: none;

  &:disabled {
    background-color: -internal-light-dark(
      rgba(239, 239, 239, 0.3),
      rgba(19, 1, 1, 0.3)
    );
    color: -internal-light-dark(
      rgba(16, 16, 16, 0.3),
      rgba(255, 255, 255, 0.3)
    );
    border-color: -internal-light-dark(
      rgba(118, 118, 118, 0.3),
      rgba(195, 195, 195, 0.3)
    );
  }

  &:hover {
    cursor: pointer;
    background: #4d6bc2;
  }

  &:after {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    right: 24px;
    background: url("../../../assets/icons/arrow-right.svg");
    content: "";

    @media (max-width: 400px) {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 12px;
      right: 16px;
      background: url("../../../assets/icons/arrow-right.svg");
      content: "";
    }
  }

  @media (max-width: 400px) {
    width: 116px;
    height: 48px;
    padding: 12px 16px;
    font-size: 15px;
    line-height: 19px;
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

  @media (max-width: 400px) {
    padding-top: 32px;
    padding-bottom: 97px;
  }
`;

export const QuestionLinkForgotWrapper = styled.div`
  margin-left: 96px;
  width: 262px;
  display: flex;
  justify-content: space-between;
  margin-left: -110px;
  margin-top: -8px;

  @media (max-width: 700px) {
    flex-direction: column;

    margin: 0 auto;
    width: 368px;
  }

  @media (max-width: 400px) {
    width: 256px;
  }

  @media (max-width: 300px) {
    width: 180px;
  }
`;

export const FormTitle = styled.label`
  width: 368px;
  height: 32px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 26px;
  color: ${colors.black};

  &_size_restore-password {
    width: 328px;
  }

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
