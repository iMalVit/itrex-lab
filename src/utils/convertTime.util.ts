const UTC_DIFF = 3;
const HOURS_IN_DAY = 12;
const HOURS_DIFF = 1;

export const timeHelper = (param: any) => {
  const date = new Date(param);
  return date.toString().substr(0, 16);
};

export const renderTime = (date: Date, time: number) => `
    ${timeHelper(date)} 
    ${(time - UTC_DIFF) <= HOURS_IN_DAY ? (time - UTC_DIFF) : (time - UTC_DIFF - HOURS_IN_DAY)}
    ${Number(time) - UTC_DIFF < HOURS_IN_DAY ? 'am' : 'pm'}
    -
    ${(Number(time - UTC_DIFF) + HOURS_DIFF) <= HOURS_IN_DAY ? (Number(time - UTC_DIFF) + HOURS_DIFF) : (Number(time - UTC_DIFF) + HOURS_DIFF - HOURS_IN_DAY)}
    ${Number(time) - UTC_DIFF + HOURS_DIFF < HOURS_IN_DAY ? 'am' : 'pm'}
`;

export const convertTime = (time: any) => {
  const convertedTime = time.slice(0, -8);
  const afterNumber = time.slice(6, 8);

  if (convertedTime === String(HOURS_IN_DAY)) return `${convertedTime}`;
  if (afterNumber === ' A' && convertedTime < HOURS_IN_DAY) return `${convertedTime}`;
  if (afterNumber === 'AM' && convertedTime < HOURS_IN_DAY) return `0${convertedTime}`;
  if (afterNumber === 'PM' && convertedTime < HOURS_IN_DAY) return `${Number(convertedTime) + HOURS_IN_DAY}`;
};

export const convertDate = (day: any) => {
  if (day.toString().length === 1) {
    return 0 + day.toString();
  } return day;
};

export const dateMakeAppointment = (date:any, time:any) => `${date.getFullYear()}-${date.getMonth() + 1}-${convertDate(
  date.getDate(),
)}T${convertTime(time)}:00:00.000Z`;
