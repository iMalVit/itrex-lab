import styled from 'styled-components';
import { colors } from '../../../components/common/theme';

export const ResolutionsTable = styled.table`
  margin-top: 32px;
  padding-right: 44px;
  width: 100%;
  border-collapse: separate;
  text-align: left;
  border-spacing: 0 4px;
`;

export const ResolutionsTableHeader = styled.tr`
height: 64px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.gray_medium};
  background-color: ${colors.white};
  box-shadow: 0px 4px 32px ${colors.gray_opacity['024']};
`;

export const ResolutionsTableCell = styled.td`
  padding: 10px 0 10px 0;
  border-bottom: solid ${colors.gray_opacity['032']};
  box-sizing: border-box;

  &:first-child {
    border-radius: 4px 0 0 4px;
    padding: 10px 0 10px 40px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
    padding: 10px 12px 10px 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ResolutionsTableHeaderCell = styled.th`
 padding: 10px 0 10px 0;
  border-bottom: solid ${colors.gray_opacity['032']};
  box-sizing: border-box;
  


  &:nth-child(1) {
    width: 18%;
    border-radius: 4px 0 0 4px;
    padding: 10px 0 10px 40px;
  }

  &:nth-child(2) {
    width: 18%;
  }

  &:nth-child(3) {
    width: 35%;
  }

  &:nth-child(4) {
    width: 12%;
  }

  &:nth-child(5) {
    width: 12%;
  }

  &:nth-child(6) {
    padding: 10px 24px 10px 0;
  }
`;

export const ResolutionsTableRow = styled.tr`
  font-size: 17px;
  line-height: 24px;
  color: ${colors.black};
  background-color: ${colors.white};
  box-shadow: 0px 4px 32px ${colors.gray_opacity['024']};

  &:last-child {
    border-bottom: none;
  }
`;

export const SettingsButton = styled.div`
  top: 28px;
  right: 28px;
  width: 40px;
  height: 40px;
  background: url("./assets/icons/settings-dots.svg") no-repeat center;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${colors.gray_light} url("./assets/icons/settings-dots-blue.svg") no-repeat center;
  }
`;
