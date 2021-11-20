import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  width: 400px;
  height: 473px;
  background: #ffffff;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
`;

export const CalendarBody = styled.div`
  padding: 16px 32px 32px 32px;
`;

export const WeekDaysContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 16px 0;
`;

export const Weekday = styled.li`
  width: 48px;
  height: 48px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  color: #a1abc9;
`;

export const DaysOnCalendar = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 8px;
  padding-left: 0;
  margin: 0;
`;

export const Day = styled.li`
  cursor: pointer;
  width: 48px;
  height: 48px;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;

  color: #202225;

  ${(props) =>
    props.selected &&
    css`
      background: #7297ff;
      border-radius: 12px;
      color: #ffffff;
    `}

  ${(props) =>
    props.today &&
    !props.selected &&
    css`
      border: 1px solid #7297ff;
      box-sizing: border-box;
      border-radius: 12px;
      color: #7297ff;
    `}

    ${(props) =>
    !props.isCurrentMonth &&
    css`
      color: #dce0ec;
    `}
`;

export const MonthTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  ${(props) =>
    props.leftArrow &&
    css`
      background: url("/assets/icons/angle-left-b.svg");
      width: 24px;
      height: 24px;
    `}
  ${(props) =>
    props.rightArrow &&
    css`
      background: url("/assets/icons/angle-right-b.svg");
      width: 24px;
      height: 24px;
    `}
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  height: 88px;
  border-bottom: 1px #dce0ec solid;
`;
