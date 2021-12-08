import styled, { css } from 'styled-components';
import { ButtonPropsType } from './Button.types';

const Button = styled.button<ButtonPropsType>`
  box-sizing: border-box;
  position: relative;

  ${(props) => props
    .variant === 'primary'
    && css`
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

      &:active {
        background-color: #7297ff;
      }
    `}

  ${(props) => props
    .variant === 'secondary'
    && css`
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

  ${(props) => props
    .size === 'small'
    && css`
      width: 160px;
      height: 40px;
      font-size: 15px;
      line-height: ;

      @media (max-width: 370px) {
        width: 120px;
      }
    `}

    ${(props) => props
    .noneOnMobile
    && css`
      @media (max-width: 768px) {
        display: none;
      }
    `}

    ${(props) => props
    .size === 'medium'
    && css`
      padding: 16px 24px;
    `}

    ${(props) => props
    .iconRight === 'arrow'
    && css`
      text-align: start;
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

    ${(props) => props
    .iconLeft === 'plus'
    && css`
      text-align: end;
      padding-right: 16px;
      &:after {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 16px;
        left: 16px;
        background: url(../../../assets/icons/plus.svg);
        content: "";
      }
    `}

  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
`;

export default Button;
