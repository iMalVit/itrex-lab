import styled from 'styled-components';
import { colors } from '../../../components/common/theme';

export const EmptyBox = styled.div`
  margin-top: 256px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 202px;

  @media (max-height: 1000px) {
    margin-top: 100px;
  }

  @media (max-width: 460px) {
    margin-top: 72px;
    height: 236px;
  }
`;

export const EmptyBoxLogo = styled.div`
  background: url("./assets/icons/medical-history.svg");
  width: 120px;
  height: 120px;
`;

export const EmptyBoxText = styled.div`
  width: 461px;
  font-family: "Poppins", sans-serif;
  color: ${colors.gray_medium};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  @media (max-width: 460px) {
    width: 240px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 332px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;

  @media (max-width: 370px) {
    width: 264px;
  }
`;
