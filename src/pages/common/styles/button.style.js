import styled, { css } from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  position: relative;

  ${(props) =>
    props.primary &&
    css`
      background-color: #7297ff;
      color: #ffffff;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #476cd3;
      }

      &:disabled {
        background-color: #dce0ec;
        cursor: default;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #ffffff;
      color: #7297ff;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: normal;
      border-radius: 8px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #f9faff;
      }

      &:disabled {
        background-color: #dce0ec;
        cursor: default;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      width: 160px;
      height: 40px;
      font-size: 15px;
      line-height: ;

      @media (max-width: 370px) {
        width: 120px;
      }
    `}

    ${(props) =>
    props.noneOnMobile &&
    css`
      @media (max-width: 768px) {
        display: none;
      }
    `}

    ${(props) =>
    props.medium &&
    css`
      padding: 16px 24px;
    `}

    ${(props) =>
    props.iconRight &&
    css`
      &:after {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 16px;
        right: 24px;
        background: url(../../../assets/icons/arrow-right.svg);
        content: "";
      }
    `}

  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
`;
