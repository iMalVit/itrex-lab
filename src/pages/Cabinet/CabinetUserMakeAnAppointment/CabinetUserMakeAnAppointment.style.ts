import styled from 'styled-components';
import { Field } from 'formik';

type TimeSlotPropsType = {
  selected?: boolean,
};

export const Board = styled.main`
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
  background: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  @media (max-height: 976px) {
    overflow-y: scroll;
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
  color: #7297ff;
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

  color: #a1abc9;
`;

export const ChooseADayError = styled.div`
  color: #f6657f;
`;

export const ChooseTimeError = styled.div`
  color: #f6657f;
  width: 464px;
`;

export const PageTitle = styled.div`
  margin-top: 72px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;

  color: #202225;
`;

export const MakeAnAppointmentForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ChooseDay = styled.div``;

export const ChooseTime = styled.div``;

export const ChooseAdditionalInfo = styled.div`
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

  color: #a1abc9;
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

  background: ${(props) => (props.selected ? '#7297FF' : '#ffffff')};

  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.selected ? '#ffffff' : '#202225')};
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
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

  color: #000000;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;

export const ButtonWrapper = styled.div`
  margin-top: 400px;
  display: flex;
  justify-content: flex-end;
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
  border: 1px solid #dce0ec;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;

  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);

  @media (max-width: 1790px) {
    width: 400px;
  }

  @media (max-width: 1550px) {
    width: 300px;
  }
`;
