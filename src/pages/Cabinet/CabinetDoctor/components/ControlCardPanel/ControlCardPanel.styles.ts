import styled from 'styled-components';
import { colors } from '../../../../../components/common/theme';

export const CommandsList = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  background: ${colors.white};
  border-radius: 8px;
  width: 272px;
  padding: 4px;
  position: absolute;
  top: 72px;
  right: 16px;
  box-shadow: 0px 4px 32px ${colors.gray_opacity['032']};
`;

export const ControlCommand = styled.li`
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  width: 264px;
  height: 40px;
  color: ${colors.black};
  font-size: 15px;
  line-height: 140%;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;

  &:last-child {
    color: ${colors.red};
  }

  &:hover {
    background: ${colors.gray_light};
  }
`;
