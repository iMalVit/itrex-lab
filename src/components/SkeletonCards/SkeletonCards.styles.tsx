import styled from 'styled-components';
import { colors } from '../common/theme';

export const SkeletonCardContainer = styled.div`
      position: relative;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: rgb(218 228 255 / 24%) 0px 4px 32px;
}

`;

export const SkeletonCardHeader = styled.div`
  padding: 24px 32px 14px 32px;
  display: flex;
  gap: 16px;

`;

export const SkeletonCardImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${colors.gray_light};
`;

export const SkeletonCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

`;

export const SkeletonCardBodyWrapper = styled.div`
  border-top: 1px solid ${colors.gray_solid};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 32px 37px 32px;

`;

export const SkeletonCardBody = styled.div`
    margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (min-width: 2400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1455px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  overflow-y: auto;
  padding-right: 44px;

  @media (max-width: 1000px) {
    padding-right: 32px;
  }

  @media (max-width: 560px) {
    padding-right: 0;
  }
`;
