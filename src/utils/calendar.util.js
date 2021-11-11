export const WEEK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const AMOUNT_DAYS_IN_WEEK = 7;

const DaysInMonths = (month, year) => {
  if (isLeapYear(year) && month === 1) {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};

const AMOUNT_WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

export function areEqual(date, comparableDate) {
  if (!date || !comparableDate) return false;
  return (
    date.getFullYear() === comparableDate.getFullYear() &&
    date.getMonth() === comparableDate.getMonth() &&
    date.getDate() === comparableDate.getDate()
  );
}

function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DaysInMonths(year)[month];

  return daysInMonth;
}

export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();

  return AMOUNT_WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year, month) {
  const rowsOfDays = [];
  const firstDateInMonth = new Date(year, month);
  const daysOnCalendarPerMonth = 35;
  const monthStartsFromMonday = getDayOfWeek(firstDateInMonth);
  let day = 1;
  let prevMonth = new Date(year, month - 1);
  let AmountDaysInPrevMonth = getDaysInMonth(prevMonth);

  for (let i = 0; i < daysOnCalendarPerMonth / AMOUNT_DAYS_IN_WEEK; i++) {
    rowsOfDays[i] = [];
    for (let j = 0; j < AMOUNT_DAYS_IN_WEEK; j++) {
      if (i === 0 && j < monthStartsFromMonday) {
        rowsOfDays[i][monthStartsFromMonday - 1 - j] = new Date(
          year,
          month - 1,
          AmountDaysInPrevMonth--
        );
      } else {
        rowsOfDays[i][j] = new Date(year, month, day++);
      }
    }
  }

  const Result = rowsOfDays[0].concat(
    rowsOfDays[1],
    rowsOfDays[2],
    rowsOfDays[3],
    rowsOfDays[4]
  );
  return Result;
}
