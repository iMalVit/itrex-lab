import React, { useEffect } from 'react';
import { useField } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { specializations } from '../../../../../store/actions';

import SelectStyled from '../SelectList/SelectList.style';
import { selectSpecializationsSpecializations } from '../../../../../store/slices';

const SpecializationsSelect = ({
  id, options, handleReset, ...props
}: any) => {
  const dispatch = useAppDispatch();
  const specializationsData = useAppSelector(selectSpecializationsSpecializations);

  const [, , { setValue }] = useField(props.field);

  const onChange = ({ value }: any) => {
    handleReset('date', '');
    handleReset('time', '');
    handleReset('doctorName', '');
    setValue(value);
  };

  useEffect(() => {
    if (specializationsData.length === 0) dispatch(specializations.pending(''));
  }, []);

  const getSpecializationsOptions = () => {
    if (specializationsData) {
      return specializationsData.map(({ id, specialization_name }) => ({
        value: id,
        label: specialization_name,
      }));
    }
  };
  return (
    <SelectStyled
      onChange={onChange}
      options={getSpecializationsOptions()}
      classNamePrefix="ReactSelect"
    />
  );
};

export default SpecializationsSelect;
