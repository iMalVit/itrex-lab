import React from "react";
import Select from "react-select";
import { useField } from "formik";

import { selectStyles } from "./SelectList.style";

export const SelectList = ({ options, ...props }) => {
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <Select
      styles={selectStyles}
      onChange={onChange}
      onBlur={setTouched}
      options={options}
    />
  );
};
