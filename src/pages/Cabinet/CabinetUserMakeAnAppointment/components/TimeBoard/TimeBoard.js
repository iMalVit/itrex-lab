import React, { useEffect, useState } from "react";
import { TimeSlot } from "../../CabinetUserMakeAnAppointment.style.";
import { useField } from "formik";

const TimeBoard = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const [selectedTime, SetSelectedTime] = useState("empty");

  const SelectHandle = (time) => {
    SetSelectedTime(time);
  };

  useEffect(() => {
    setValue(selectedTime);
  }, [selectedTime]);

  if (props.doctors) {
    return props.doctors.map((time) => (
      <TimeSlot
        key={`time-${time}`}
        selected={time === selectedTime}
        onClick={SelectHandle.bind(null, time)}
      >
        {time}
      </TimeSlot>
    ));
  } else return <></>;
};

export default TimeBoard;
