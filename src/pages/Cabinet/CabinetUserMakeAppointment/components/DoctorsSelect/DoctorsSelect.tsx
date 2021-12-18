import React, { useEffect } from 'react';
import { useField, useFormikContext, FormikValues } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { selectDoctorsPerSpecializationDoctors } from '../../../../../store/slices/doctorsPerSpecialization.slice';
import SelectStyled from '../SelectList/SelectList.style';
import doctorsPerSpecialization from '../../../../../store/actions/doctorsPerSpecialization.actions';

const DoctorsSelect = ({
  id, options, handleReset, ...props
}: any) => {
  const dispatch = useAppDispatch();

  const [, , { setValue }] = useField(props.field);
  const { values } = useFormikContext<FormikValues>();

  const onChange = ({ value }: any) => {
    setValue(value);
    handleReset('date', '');
    handleReset('time', '');
  };

  useEffect(() => {
    if (values.occupation) {
      dispatch(doctorsPerSpecialization.pending(values.occupation));
    }
  }, [values.occupation]);

  const doctors = useAppSelector(selectDoctorsPerSpecializationDoctors);
  const getDoctorsById = () => {
    if (doctors) {
      return doctors.map(
        ({ id, first_name: firstName, last_name: lastName }: any) => ({
          label: `${firstName} ${lastName}`,
          value: id,
        }),
      );
    }
  };

  return (
    <SelectStyled
      onChange={onChange}
      options={getDoctorsById()}
      classNamePrefix="ReactSelect"
    />
  );
};

export default DoctorsSelect;
