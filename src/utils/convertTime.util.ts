const UTC_DIFF = 3;
const HOURS_IN_DAY = 12;
const HOURS_DIFF = 1;

export const timeHelper = (param: Date) => {
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

export const convertTime = (time: string) => {
  const convertedTime = time.slice(0, -8);
  const afterNumber = time.slice(6, 8);

  if (convertedTime === String(HOURS_IN_DAY)) return `${convertedTime}`;
  if (afterNumber === ' A' && Number(convertedTime) < HOURS_IN_DAY) return `${convertedTime}`;
  if (afterNumber === 'AM' && Number(convertedTime) < HOURS_IN_DAY) return `0${convertedTime}`;
  if (afterNumber === 'PM' && Number(convertedTime) < HOURS_IN_DAY) return `${Number(convertedTime) + HOURS_IN_DAY}`;
};

export const timeBoardConvertTime = (hour: number) => {
  const prepend = hour >= HOURS_IN_DAY ? ' PM ' : ' AM ';
  hour = hour > HOURS_IN_DAY ? hour - HOURS_IN_DAY : hour;
  return `${hour}:00 ${prepend}`;
};

export const convertDate = (day: Date) => {
  if (day.toString().length === 1) {
    return 0 + day.toString();
  } return day;
};

const convertMonth = (month:number) => {
  if (month >= 1 && month <= 9) return `0${month}`;
  if (month >= 10 && month <= 12) return `${month}`;
};

export const dateMakeAppointment = (date:any, time:any) => `${date.getFullYear()}-${convertMonth(date.getMonth() + 1)}-${convertDate(
  date.getDate(),
)}T${convertTime(time)}:00:00.000Z`;
