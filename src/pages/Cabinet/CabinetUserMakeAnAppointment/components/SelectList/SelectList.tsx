import React, { useEffect, useState } from "react";
import { FormikValues, useField, useFormikContext } from "formik";

import { SelectStyled } from "./SelectList.style";
import { getDoctorsBySpezialisation } from "../../../../../api/api.util";

export const SelectList = ({ id, options, ...props }: any) => {
  const [doctors, setDoctors] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const { values } = useFormikContext<FormikValues>();

  const onChange = ({ value }: any) => {
    setValue(value);
  };

  useEffect(() => {
    if (values.occupation) {
      getDoctorsBySpezialisation(values.occupation)
        .then((responce) => setDoctors(responce.data))
        .then(() => calculateOptions());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.occupation]);

  const calculateOptions = () => {
    switch (id) {
      case "occupation":
        return options;

      case "doctorName":
        if (doctors) {
          return doctors.map(
            ({ id, first_name: firstName, last_name: lastName }: any) => ({
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
      // onBlur={setTouched}
      options={calculateOptions()}
      classNamePrefix="ReactSelect"
    />
  );
};
