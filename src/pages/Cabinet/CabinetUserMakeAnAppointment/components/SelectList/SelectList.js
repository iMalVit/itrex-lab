import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";

import { SelectStyled } from "./SelectList.style";
import { getDoctorsBySpezialisation } from "../../../../../api/api.util";

export const SelectList = ({ id, options, ...props }) => {
  const [doctors, setDoctors] = useState(null);

  const [field, state, { setValue, setTouched }] = useField(props.field);
  const { values } = useFormikContext();

  const onChange = ({ value }) => {
    setValue(value);
  };

  useEffect(() => {
    if (values.occupation) {
      getDoctorsBySpezialisation(values.occupation)
        .then((responce) => setDoctors(responce.data))
        .then(() => calculateOptions());
    }
  }, [values.occupation]);

  const calculateOptions = () => {
    switch (id) {
      case "occupation":
        return options;

      case "doctorName":
        if (doctors) {
          return doctors.map(
            ({ id, first_name: firstName, last_name: lastName }) => ({
              label: `${firstName} ${lastName}`,
              value: id,
            })
          );
        }
        break;
      default:
    }
  };

  return (
    <SelectStyled
      onChange={onChange}
      onBlur={setTouched}
      options={calculateOptions()}
      classNamePrefix="ReactSelect"
    />
  );
};
