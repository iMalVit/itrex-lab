import React, { useEffect, useState } from "react";
import { TimeSlot } from "../../CabinetUserMakeAnAppointment.style";
import { FormikValues, useField, useFormikContext } from "formik";

import { getAvailableTime } from "../../../../../api/api.util";

const TimeBoard = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState<any>(null);

  const [availibleTime, SetAvailibleTime] = useState<any>(null);

  const { values } = useFormikContext<FormikValues>();

  const SelectHandle = (time: any) => {
    SetSelectedTime(time);
  };

  const convertTime = (hour: any) => {
    const prepand = hour >= 12 ? " PM " : " AM ";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:00 ${prepand}`;
  };
  useEffect(() => {
    setValue(selectedTime);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime]);

  useEffect(() => {

    getAvailableTime(
      new Date(values.date.getTime() + 9 * 1200000),
      values.doctorName
    ).then((responce) => {
      SetAvailibleTime(
        responce.data.map((backend: any) =>
          convertTime(Number(new Date(backend).getHours()))
        )
      );
      SetSelectedTime(null);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.date]);

  return availibleTime ? (
    availibleTime.map((time: any, index: any) => (
      <TimeSlot
        key={index}
        selected={time === selectedTime}
        onClick={SelectHandle.bind(null, time)}
      >
        {time}
      </TimeSlot>
    ))
  ) : (
    <div></div>
  );
};

export default TimeBoard;
