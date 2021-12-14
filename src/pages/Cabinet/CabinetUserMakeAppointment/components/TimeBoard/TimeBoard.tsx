import React, { useEffect, useState } from 'react';
import { FormikValues, useField, useFormikContext } from 'formik';
import { TimeSlot } from '../../CabinetUserMakeAppointment.style';

import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import fetchAvailableTime from '../../../../../store/actions/availableTime.actions';
import { selectAvailableTimeTime } from '../../../../../store/slices/availableTime.slice';

const TimeBoard = (props: any) => {
  const [, , { setValue }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState<any>(null);

  const dispatch = useAppDispatch();

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
    dispatch(fetchAvailableTime.pending({
      date: new Date(values.date.getTime() + 9 * 1200000),
      doctorId: values.doctorName,
    }));
    SetSelectedTime(null);
  }, [values.date]);

  const availableTime = useAppSelector(selectAvailableTimeTime);
  const convertAvailableTime = () => {
    if (availableTime) {
      return availableTime.map((backend: any) => convertTime(Number(new Date(backend).getHours())));
    }
    return null;
  };
  return convertAvailableTime() ? (
    convertAvailableTime().map((time: any, index: any) => (
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
