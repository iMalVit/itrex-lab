import styled from 'styled-components';
import { colors } from '../../../../../components/common/theme';

export const ModalWrapper = styled.div`
 height: 100vh;
  width: 100vw;
  background-color: rgba(70,72,75,0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  z-index: 1000;`;

export const ModalContent = styled.div`
   border-radius: 16px;
  background-color: white;
  transition: .5s all;
  width: 560px;
  min-height: 467px;
  `;

export const ResolutionModalBody = styled.div`
  padding: 40px;
`;

export const SelectedPatientImage = styled.img`
  margin: 0 18px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  object-fit: contain;
`;

export const ResolutionModalTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.black};
  margin: 0 0 24px 0;
`;

export const SelectedPatientInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 26px 0;
`;

export const ResolutionTextareaTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${colors.gray_medium};
  margin: 0 0 16px 0;
`;

export const ResolutionModalFooter = styled.div`
  padding: 31px 40px 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.blue_sky};
  border-radius: 0 0 8px 8px;
`;

export const ResolutionModalTextArea = styled.textarea`
  background: ${colors.white};
  border: 1px solid ${colors.gray_solid};
  box-sizing: border-box;
  box-shadow: 0px 4px 32px ${colors.gray_opacity['016']};
  border-radius: 8px;
  overflow-y: auto;
  width: 100%;
  height: 160px;
  resize: none;
  outline: none;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.black};
  padding: 16px 28px 18px 24px;

  &:focus {
    border: 1px solid ${colors.dark_blue};
  }
`;
