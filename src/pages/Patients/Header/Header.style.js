import styled from "styled-components";

export const HeaderWrapper = styled.header`
  max-width: 2560px;
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e4ebff;
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
  color: #a1abc9;
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
  background-color: #e4ebff;
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #34c197;
`;

export const HeaderLogoBox = styled.div`
  width: 132px;
  height: 32px;
`;
