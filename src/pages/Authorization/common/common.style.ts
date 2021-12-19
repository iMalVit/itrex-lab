import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import {
  BackgroundWrapperPropsType, QuestionLinkWrapperPropsType, InputErrorTextPropsType, ShowPasswordIconPropsType,
} from './common.types';
import { colors } from '../../../components/common/theme';

export const BackgroundWrapper = styled.div<BackgroundWrapperPropsType>`
  display: flex;
  flex-direction: row-reverse;
  background: url("../../../assets/images/bg.jpg");
  background-size: cover;
  height: 100vh;
  min-height: 680px;

  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 800px;

    background: url("../../../assets/images/bg-small.jpg");
    background-size: contain;
  }

  @media (max-width: 400px) {
    min-height: 672px;
  }

  @media (max-height: 667px) {
    min-height: ${(props) => (props.page === 'RestorePassword' || props.page === 'SignIn'
    ? '100vh'
    : 'none')};
  }
`;

export const QuestionLinkWrapper = styled.div<QuestionLinkWrapperPropsType>`
  margin-left: 96px;
  width: ${(props) => (props.page === 'SignIn' ? '270px' : '262px')};
  display: flex;
  justify-content: space-between;

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

export const QuestionLinkText = styled.div`
  color: ${colors.gray_medium};
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;

  @media (max-width: 300px) {
    font-size: 13px;
  }
`;

export const QuestionLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: ${colors.blue};
  text-decoration-line: underline;

  @media (max-width: 300px) {
    font-size: 13px;
  }
`;

export const InputErrorText = styled.div<InputErrorTextPropsType>`
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 120%;
  bottom: ${(props) => (props
    .type === 'password' || props.type === 'text' ? '-23px' : '-16px')};
  color: ${colors.brink_pink};
`;

export const FormButtonWrapper = styled.div`
  margin-top: 24px;
  width: 368px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 400px) {
    width: 256px;
    margin-top: 8px;
  }

  @media (max-width: 300px) {
    width: 180px;
  }
`;

export const FormInput = styled(Field)`
  padding-left: 63px;
  padding-right: 50px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  width: 368px;
  height: 56px;
  color: ${colors.black};
  border: 1px solid ${(props) => (props.isvalid ? 'red' : `${colors.gray_solid}`)};
  outline: ${(props) => (props.isvalid ? 'none' : '')};
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

  &:focus::-webkit-input-placeholder {
    color: ${colors.transparent};
  }

  &::-webkit-input-placeholder {
    color: ${colors.gray_medium};
  }

  @media (max-width: 400px) {
    padding-left: 47px;
    width: 256px;
    height: 40px;
  }

  @media (max-width: 300px) {
    font-size: 11px;
    width: 180px;
  }
`;

export const FormInputWrapperFirstName = styled.div`
  position: relative;

  &:before {
    z-index: 20;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 26px;

    background-image: url("../../../assets/icons/name.svg");

    @media (max-width: 400px) {
      top: 10px;
      left: 18px;
    }
  }
`;
export const FormInputWrapperLastName = styled.div`
  position: relative;

  &:before {
    z-index: 20;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 26px;

    background-image: url("../../../assets/icons/name.svg");

    @media (max-width: 400px) {
      top: 10px;
      left: 18px;
    }
  }
`;
export const FormInputWrapperEmail = styled.div`
  position: relative;

  &:before {
    z-index: 20;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 26px;

    background-image: url("../../../assets/icons/mail.svg");
    height: 16px;
    top: 20px;

    @media (max-width: 400px) {
      top: 12px;
      left: 18px;
    }
  }
`;
export const FormInputWrapperPassword = styled.div`
  position: relative;

  &:before {
    z-index: 20;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 26px;

    background-image: url("../../../assets/icons/password.svg");
    left: 28px;
    width: 16px;

    @media (max-width: 400px) {
      top: 10px;
      left: 20px;
    }
  }
`;
export const FormInputWrapperConfirmPassword = styled.div`
  position: relative;

  &:before {
    z-index: 20;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    left: 26px;

    background-image: url("../../../assets/icons/confirm-password.svg");
    width: 16px;
    height: 12px;
    top: 23px;
    left: 29px;

    @media (max-width: 400px) {
      top: 15px;
      left: 21px;
    }
  }
`;

export const ShowPasswordIcon = styled.span<ShowPasswordIconPropsType>`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.isShow
    ? 'url("../../../assets/icons/visibility_off.svg") no-repeat'
    : 'url("../../../assets/icons/visibility.svg") no-repeat')};
  background-size: contain;
  position: absolute;
  top: 18px;
  right: 26px;
  cursor: pointer;
  -webkit-tap-highlight-color: ${colors.transparent};
  @media (max-width: 400px) {
    top: 8px;
    right: 18px;
  }
`;
