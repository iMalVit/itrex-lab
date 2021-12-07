import styled from "styled-components";
import { InputErrorTextPropsType } from "./common.types";

export const Content = styled.div`
  position: relative;
  min-width: 270px;
  background: #e4ebff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const Board = styled.main`
  max-width: 2560px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 40px 16px 16px 48px;
  display: flex;
  border-radius: 16px;
  width: 93%;
  min-height: 400px;
  margin: 0 auto;
  height: 89%;
  background: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);

  @media (max-width: 460px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    height: 95%;
    border-radius: 16px 16px 0 0;
  }
`;

export const BoardTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  margin: 0;
`;

export const BoardBox = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (min-width: 2400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1455px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  overflow-y: auto;
  padding-right: 44px;

  @media (max-width: 1000px) {
    padding-right: 32px;
  }

  @media (max-width: 560px) {
    padding-right: 0;
  }
`;

export const InputErrorText = styled.div<InputErrorTextPropsType>`
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 120%;
  bottom: ${(props) =>
    props.type === "password" || props.type === "text" ? "-23px" : "-16px"};
  color: #f6657f;
`;
