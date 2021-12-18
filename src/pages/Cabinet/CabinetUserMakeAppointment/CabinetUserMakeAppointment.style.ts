import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import { colors } from '../../../components/common/theme';

type TimeSlotPropsType = {
  selected?: boolean,
};

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.blue};
`;

export const Board = styled.main`
  position: relative;
  max-width: 2560px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 40px 48px 48px 48px;
  display: flex;
  border-radius: 16px;
  width: 93%;
  min-height: 400px;
  margin: 0 auto;
  height: 89%;
  background: ${colors.gray_light};
  box-shadow: 0px 4px 32px ${colors.gray_opacity['032']};
  @media (max-height: 976px) {
    overflow-y: scroll;
  }
  @media (max-width: 1428px) {
    overflow-x: scroll;
  }

  @media (max-width: 460px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    height: 95%;
    border-radius: 16px 16px 0 0;
  }
`;

export const Navigation = styled.div`
  display: flex;
`;

export const MainTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: ${colors.blue};
`;

export const ArrowNavigationIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url("/assets/icons/angle-right-b.svg");
  margin-left: 8px;
  margin-right: 8px;
`;

export const SubTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;

  color: ${colors.gray_medium};
`;

export const ChooseADayError = styled.div`
  color: ${colors.brink_pink};
`;

export const ChooseTimeError = styled.div`
  color: ${colors.brink_pink};
  width: 464px;
  @media (max-width: 1550px) {
    width: 300px;
  }
`;

export const PageTitle = styled.div`
  margin-top: 72px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;

  color: ${colors.black};
`;

export const MakeAppointmentForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (min-width: 1000px) {
    min-width: 1200px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ChooseDay = styled.div`
flex-shrink: 0;
width: 400px`;

export const ChooseTime = styled.div`
position: relative;
flex-shrink: 0;`;

export const ChooseAdditionalInfo = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const StepInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const StepIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export const StepText = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;

  color: ${colors.gray_medium};
`;

export const ChooseTimeContainer = styled.ul`
  padding: 0;
  width: 464px;
  height: 152px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media (max-width: 1550px) {
    grid-gap: 8px;
    width: 300px;
  }
`;

export const TimeSlot = styled.li<TimeSlotPropsType >`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  box-sizing: border-box;

  background: ${(props) => (props.selected ? `${colors.blue}` : `${colors.white}`)};

  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.selected ? `${colors.white}` : `${colors.black}`)};
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  box-shadow: 0px 4px 32px ${colors.gray_opacity['024']};
  border-radius: 8px;

  cursor: pointer;

  @media (max-width: 1550px) {
    font-size: 14px;
  }
`;

export const SelectWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const InputLabel = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;

  color: ${colors.black};
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;

export const ButtonWrapper = styled.div`
position: absolute;
bottom: 50px;
right: 0;
`;

export const LoadingIndicator = styled.div`
  margin-top: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;

  color: red; ;
`;
export const Input = styled(Field)`
  padding-left: 24px;
  box-sizing: border-box;
  width: 624px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid ${colors.gray_solid};

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;

  box-shadow: 0px 4px 32px ${colors.gray_opacity['016']};

  @media (max-width: 1790px) {
    width: 400px;
  }

  @media (max-width: 1550px) {
    width: 300px;
  }
`;
