import styled from 'styled-components';
import { colors } from '../../../../components/common/theme';

type StatusIconPropsType = {
  status: string
}

export const PatientBox = styled.div`
  position: relative;
  background: ${colors.white};
  border-radius: 12px;
  padding-bottom: 40px;
  box-shadow: 0px 4px 32px ${colors.gray_opacity['024']};

  @media (max-width: 460px) {
    min-width: 207px;
  }
`;

export const MainInfo = styled.div`
  height: 72px;
  padding-top: 24px;
  padding-left: 32px;
  display: flex;

  @media (max-width: 350px) {
    height: auto;
    padding-left: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusText = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: ${colors.gray_medium};
  margin-left: 8px;
`;

export const PatientDocumentText = styled.div`
  margin-left: 24px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  color: ${colors.black};

  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const PatientDocumentIcon = styled.img`
  position: relative;
  left: 2px;
`;

export const PatientTimeText = styled.div`
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  color: ${colors.black};

  @media (max-width: 550px) {
    width: auto;
  }
`;

export const PatientName = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 130%;
  width: 188px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 350px) {
    width: 140px;
  }

  @media (max-width: 300px) {
    width: 80px;
  }
`;

export const DescriptionBox = styled.div`
  margin-left: 16px;
`;

export const StatusIcon = styled.div<StatusIconPropsType>`
  width: 8px;
  height: 8px;
  border-radius: 100%;

  @media (max-width: 300px) {
    width: 5px;
    height: 5px;
  }

  background-color: ${(props) => (props.status ? `${colors.green}` : `${colors.red}`)};
`;

export const PatientInfo = styled.div`
  border-top: solid ${colors.gray_solid} 1px;
  max-height: 145px;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 460px) {
    padding-left: 24px;
    max-height: 161px;
  }

  @media (max-width: 320px) {
    height: 200px;
  }
`;

export const DescriptionBoxDocument = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1000px) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
display: flex;
`;

export const SettingsButton = styled.div`
  position: absolute;
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
