import React, { useEffect, useState } from 'react';
import { FormikValues, useField, useFormikContext } from 'formik';
import {
  TimeSlot,
  DateErrorText,
} from '../../CabinetUserMakeAppointment.style';

import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { availableTime } from '../../../../../store/actions';
import { selectAvailableTimeTime } from '../../../../../store/slices';
import { timeBoardConvertTime } from '../../../../../utils/convertTime.util';
import dictionary from '../../../../../common/dictionary';

const TimeBoard = (props: any) => {
  const [, , { setValue }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState<any>(null);

  const dispatch = useAppDispatch();

  const { values } = useFormikContext<FormikValues>();

  const TIME_DIFF = 9 * 1200000;

  const SelectHandle = (time: any) => {
    SetSelectedTime(time);
  };

  useEffect(() => {
    setValue(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    dispatch(
      availableTime.pending({
        date: new Date(values.date.getTime() + TIME_DIFF),
        doctorId: values.doctorName,
      }),
    );
    SetSelectedTime(null);
  }, [values.date]);

  const availableTimeArray = useAppSelector(selectAvailableTimeTime);
  const convertAvailableTime = () => {
    if (availableTimeArray) {
      return availableTimeArray
        .map((backend: any) => timeBoardConvertTime(Number(new Date(backend).getHours())));
    }
    return null;
  };

  return convertAvailableTime().length > 0 ? (
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
    <DateErrorText>{dictionary.makeAppointments.DateError}</DateErrorText>
  );
};

export default TimeBoard;
