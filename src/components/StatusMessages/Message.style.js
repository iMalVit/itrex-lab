import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  border-radius: 12px;
  width: 457px;
  height: 122px;
  padding-top: 24px;
  padding-left: 72px;

  ${(props) =>
    props.error &&
    css`
      background: #ff2567;
    `}

  ${(props) =>
    props.success &&
    css`
      background: #34c197;
    `}
`;

export const MessageTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const MessageDescription = styled.div`
  width: 329px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;

  color: #ffffff;
`;

export const AttentionIcon = styled.div`
  position: absolute;
  top: 26px;
  left: 34px;
  background: url("/assets/icons/attention.svg");
  width: 20px;
  height: 20px;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 24px;
  background: url("/assets/icons/close.svg");
  width: 24px;
  height: 24px;
`;
