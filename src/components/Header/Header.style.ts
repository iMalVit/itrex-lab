import styled from 'styled-components';
import { colors } from '../common/theme';

export const HeaderWrapper = styled.header`
  max-width: 2560px;
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.blue_sky};
  height: 7%;
  min-height: 80px;

  @media (max-width: 460px) {
    height: 72px;
    min-height: auto;
    width: 85%;
  }
`;

export const LoggedPerson = styled.div`
  display: flex;
  justify-content: space-between;
  width: 208px;
  position: relative;

  @media (max-width: 460px) {
    width: 40px;
  }
`;

export const LoggedPersonDescription = styled.div`
  width: 152px;

  @media (max-width: 460px) {
    display: none;
  }
`;

export const LoggedPersonName = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-align: right;
`;

export const LoggedPersonProfession = styled.div`
  font-family: "Poppins", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: ${colors.gray_medium};
  text-align: right;
`;

export const IndicatorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background-color: ${colors.blue_sky};
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${colors.green};
`;

export const HeaderLogoBox = styled.div`
  width: 132px;
  height: 32px;
`;

export const UserLogo = styled.img`
  width: 40px;
  height: 40px;
`;
