import React from 'react';
import { useField } from 'formik';
import Calendar from '../../../../../components/Calendar/Calendar';

const CalendarFormik = (props: any) => {
  const [, , { setValue }] = useField(props.field);

  return (
    <Calendar setValue={setValue} />
  );
};

export default CalendarFormik;
