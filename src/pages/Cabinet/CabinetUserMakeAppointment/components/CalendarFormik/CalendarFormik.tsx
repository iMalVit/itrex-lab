import React from 'react';
import { useField } from 'formik';
import { Calendar } from '../../../../../components';

interface CalendarFormikPropsType {
  field: any
}

const CalendarFormik:React.FC<CalendarFormikPropsType> = (props) => {
  const [, , { setValue }] = useField(props.field);

  return (
    <Calendar setValue={setValue} />
  );
};

export default CalendarFormik;
