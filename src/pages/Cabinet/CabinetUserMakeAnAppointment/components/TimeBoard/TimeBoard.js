import React, { useEffect, useState } from "react";
import { TimeSlot } from "../../CabinetUserMakeAnAppointment.style.";
import { useField, useFormikContext } from "formik";

import { getAvailableTime } from "../../../../../api/api.util";

const TimeBoard = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState(null);

  const [availibleTime, SetAvailibleTime] = useState(null);

  const { values } = useFormikContext();

  const SelectHandle = (time) => {
    SetSelectedTime(time);
  };

  const convertTime = (hour) => {
    const prepand = hour >= 12 ? " PM " : " AM ";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:00 ${prepand}`;
  };
  useEffect(() => {
    setValue(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    console.log();
    getAvailableTime(
      new Date(values.date.getTime() + 9 * 1200000),
      values.doctorName
    ).then((responce) => {
      SetAvailibleTime(
        responce.data.map((backend) =>
          convertTime(Number(new Date(backend).getHours()))
        )
      );
      SetSelectedTime(null);
    });
  }, [values.date]);

  return availibleTime ? (
    availibleTime.map((time, index) => (
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
