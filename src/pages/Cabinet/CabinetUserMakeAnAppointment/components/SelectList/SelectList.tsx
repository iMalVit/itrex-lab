import React, { useEffect, useState } from 'react';
import { FormikValues, useField, useFormikContext } from 'formik';

import SelectStyled from './SelectList.style';
import { getDoctorsBySpecialization } from '../../../../../api/api.util';

const SelectList = ({ id, options, ...props }: any) => {
  const [doctors, setDoctors] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [field, state, { setValue, setTouched }] = useField(props.field);
  const { values } = useFormikContext<FormikValues>();

  const onChange = ({ value }: any) => {
    setValue(value);
  };

  useEffect(() => {
    if (values.occupation) {
      getDoctorsBySpecialization(values.occupation)
        .then((response) => setDoctors(response.data))
        .then(() => calculateOptions());
    }
  }, [values.occupation]);

  const calculateOptions = () => {
    switch (id) {
      case 'occupation':
        return options;

      case 'doctorName':
        if (doctors) {
          return doctors.map(
            ({ id, first_name: firstName, last_name: lastName }: any) => ({
              label: `${firstName} ${lastName}`,
              value: id,
            }),
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

export default SelectList;
