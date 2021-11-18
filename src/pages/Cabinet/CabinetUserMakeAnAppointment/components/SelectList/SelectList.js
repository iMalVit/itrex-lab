import React from "react";
import { useField } from "formik";

import { SelectStyled } from "./SelectList.style";

export const SelectList = ({ options, ...props }) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <SelectStyled
      onChange={onChange}
      onBlur={setTouched}
      options={options}
      classNamePrefix="ReactSelect"
    />
  );
};
