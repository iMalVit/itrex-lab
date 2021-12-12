import React, { useEffect } from 'react';
import { useField } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import specializations from '../../../../../store/actions/specializations.actions';

import SelectStyled from '../SelectList/SelectList.style';
import { selectSpecializationsSpecializations } from '../../../../../store/slices/specializations.slice';

const SpecializationsSelect = ({
  id, options, handleReset, ...props
}: any) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [field, state, { setValue, setTouched }] = useField(props.field);
  //   const { values } = useFormikContext<FormikValues>();

  const onChange = ({ value }: any) => {
    handleReset('date', '');
    handleReset('time', '');
    handleReset('doctorName', '');
    setValue(value);
  };

  useEffect(() => {
    dispatch(specializations.pending(''));
  }, []);

  const specializationsData = useAppSelector(selectSpecializationsSpecializations);
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
      // onBlur={setTouched}
      options={getSpecializationsOptions()}
      classNamePrefix="ReactSelect"
    />
  );
};

export default SpecializationsSelect;
