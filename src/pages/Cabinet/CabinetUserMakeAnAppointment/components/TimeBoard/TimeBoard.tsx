import React, { useEffect, useState } from 'react';
import { FormikValues, useField, useFormikContext } from 'formik';
import { TimeSlot } from '../../CabinetUserMakeAnAppointment.style';

import { getAvailableTime } from '../../../../../api/api.util';

const TimeBoard = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState<any>(null);

  const [availableTime, SetAvailableTime] = useState<any>(null);

  const { values } = useFormikContext<FormikValues>();

  const SelectHandle = (time: any) => {
    SetSelectedTime(time);
  };

  const convertTime = (hour: any) => {
    const prepend = hour >= 12 ? ' PM ' : ' AM ';
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:00 ${prepend}`;
  };
  useEffect(() => {
    setValue(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    getAvailableTime(
      new Date(values.date.getTime() + 9 * 1200000),
      values.doctorName,
    ).then((response) => {
      SetAvailableTime(
        response.data.map((backend: any) => convertTime(Number(new Date(backend).getHours()))),
      );
      SetSelectedTime(null);
    });
  }, [values.date]);

  return availableTime ? (
    availableTime.map((time: any, index: any) => (
      <TimeSlot
        key={index}
        selected={time === selectedTime}
        onClick={SelectHandle.bind(null, time)}
      >
        {time}
      </TimeSlot>
    ))
  ) : (
    <div />
  );
};

export default TimeBoard;
