import styled, { css } from 'styled-components';
import { colors } from '../common/theme';
import { ButtonPropsType } from './Button.types';

const StyledButton = styled.button<ButtonPropsType>`
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
      line-height: 141%;
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
    .size === 'medium'
    && css`
      padding: 16px 56px 16px 24px;
    `}


    ${(props) => props
    .size === 'medium-submit'
    && css`
      padding: 16px 49px;
    `}

    ${(props) => props
    .size === 'large'
    && css`
      line-height: 160%;
      padding: 12px 16px 12px 48px;
      font-size: 15px;
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
        top: 12px;
        left: 16px;
        background: url(../../../assets/icons/plus.svg);
        content: "";
      }
    `}

    ${(props) => props
    .iconLeft === 'close'
    && css`
      text-align: end;
      padding-right: 16px;
      &:after {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 12px;
        left: 16px;
        background: url(../../../assets/icons/close-icon.svg);
        content: "";
      }
    `}

    ${(props) => props
    .iconLeft === 'board'
    && css`
      text-align: end;
      padding-right: 16px;
      &:after {
        position: absolute;
        width: 16px;
        height: 20px;
        top: 12px;
        left: 16px;
        background: url(../../../assets/icons/board-icon.svg);
        content: "";
      }
    `}
`;

export default StyledButton;
