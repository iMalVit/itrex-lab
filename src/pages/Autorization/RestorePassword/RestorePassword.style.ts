import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.main`
  height: 100%;
  width: 560px;
  background: #f9faff;
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
  color: #202225;

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
  color: #a1abc9;

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

export const FormButtonSubmit = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  position: relative;
  color: #ffffff;
  text-align: start;
  padding: 16px 24px;
  width: 214px;
  height: 56px;
  background: #7297ff;
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
    width: 198px;
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

  /* Only this page */
  @media (max-height: 400px) {
    padding-bottom: 0;
  }
`;
