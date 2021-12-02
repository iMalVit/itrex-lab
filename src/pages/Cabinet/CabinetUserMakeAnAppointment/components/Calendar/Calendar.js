import React, { useEffect, useState } from "react";
import {
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  DaysOnCalendar,
  Day,
  Weekday,
  WeekDaysContainer,
  MonthTitle,
  Button,
} from "./Calendar.style";
import * as calendar from "../../../../../utils/calendar.util";
import { useField } from "formik";

const Calendar = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);

  const todayDate = new Date();

  const [date, setDate] = useState(todayDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayedYear, setDisplayedYear] = useState(todayDate.getFullYear());
  const [displayedMonth, setDisplayedMonth] = useState(todayDate.getMonth());

  useEffect(() => {
    setDisplayedMonth(date.getMonth());
    setDisplayedYear(date.getFullYear());
  }, [date]);

  useEffect(() => {
    setValue(selectedDate);
  }, [selectedDate]);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(displayedYear, displayedMonth - 1);
    setDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(displayedYear, displayedMonth + 1);
    setDate(date);
  };

  const handleDayClick = (date) => {
    if (date.getMonth() === displayedMonth) {
      setSelectedDate(date);
    }
  };

  const calendarMonthData = calendar.getMonthData(
    displayedYear,
    displayedMonth
  );

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Button
          leftArrow
          type={"button"}
          onClick={handlePrevMonthButtonClick}
        ></Button>
        <MonthTitle>
          {date.toLocaleString("default", { month: "long" })} {displayedYear}
        </MonthTitle>
        <Button
          rightArrow
          type={"button"}
          onClick={handleNextMonthButtonClick}
        ></Button>
      </CalendarHeader>
      <CalendarBody>
        <WeekDaysContainer>
          {calendar.WEEK_DAYS.map((weekDay, index) => (
            <Weekday key={index}>{weekDay}</Weekday>
          ))}
        </WeekDaysContainer>
        <DaysOnCalendar>
          {calendarMonthData.map((date, index) => (
            <Day
              key={index}
              today={calendar.areEqual(date, todayDate)}
              selected={
                calendar.areEqual(date, selectedDate) &&
                date.getMonth() === displayedMonth
              }
              isCurrentMonth={date.getMonth() === displayedMonth}
              onClick={handleDayClick.bind(null, date)}
            >
              {date.getDate()}
            </Day>
          ))}
        </DaysOnCalendar>
      </CalendarBody>
    </CalendarContainer>
  );
};

export default Calendar;
