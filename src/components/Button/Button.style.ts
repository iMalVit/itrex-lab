import styled, { css } from 'styled-components';
import { colors } from '../common/theme';
import { ButtonPropsType } from './Button.types';

const Button = styled.button<ButtonPropsType>`
  box-sizing: border-box;
  position: relative;

  ${(props) => props
    .variant === 'primary'
    && css`
      background-color: ${colors.blue};
      color: ${colors.white};
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: ${colors.dark_blue};
      }

      &:disabled {
        background-color: ${colors.gray_solid};
        cursor: default;
      }

      &:active {
        background-color: ${colors.blue};
      }
    `}

  ${(props) => props
    .variant === 'secondary'
    && css`
      background-color: ${colors.white};
      color: ${colors.blue};
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: normal;
      border-radius: 8px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: ${colors.gray_light};
      }

      &:disabled {
        background-color: ${colors.gray_solid};
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
