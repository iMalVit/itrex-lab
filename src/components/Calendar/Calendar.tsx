import React, { useEffect, useState } from 'react';

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
} from './Calendar.style';
import * as calendar from '../../utils/calendar.util';

export const Calendar = (props: any) => {
  const todayDate = new Date();

  const [date, setDate] = useState(todayDate);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [displayedYear, setDisplayedYear] = useState(todayDate.getFullYear());
  const [displayedMonth, setDisplayedMonth] = useState(todayDate.getMonth());

  useEffect(() => {
    setDisplayedMonth(date.getMonth());
    setDisplayedYear(date.getFullYear());
  }, [date]);

  useEffect(() => {
    if (props.setValue) {
      props.setValue(selectedDate);
    }
  }, [selectedDate]);

  const handlePrevMonthButtonClick = () => {
    const date = new Date(displayedYear, displayedMonth - 1);
    setDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(displayedYear, displayedMonth + 1);
    setDate(date);
  };

  const handleDayClick = (date: any) => {
    if (date.getMonth() === displayedMonth) {
      setSelectedDate(date);
    }
  };

  const calendarMonthData = calendar.getMonthData(
    displayedYear,
    displayedMonth,
  );

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Button
          leftArrow
          type="button"
          onClick={handlePrevMonthButtonClick}
        />
        <MonthTitle>
          {date.toLocaleString('default', { month: 'long' })}
          {' '}
          {displayedYear}
        </MonthTitle>
        <Button
          rightArrow
          type="button"
          onClick={handleNextMonthButtonClick}
        />
      </CalendarHeader>
      <CalendarBody>
        <WeekDaysContainer>
          {calendar.WEEK_DAYS.map((weekDay, index) => (
            <Weekday key={index}>{weekDay}</Weekday>
          ))}
        </WeekDaysContainer>
        <DaysOnCalendar>
          {calendarMonthData.map((date: any, index: any) => (
            <Day
              key={index}
              today={calendar.areEqual(date, todayDate)}
              selected={
                calendar.areEqual(date, selectedDate)
                && date.getMonth() === displayedMonth
              }
              isCurrentMonth={date.getMonth() === displayedMonth}
              // eslint-disable-next-line react/jsx-no-bind
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
