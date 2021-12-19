import React from 'react';
import StyledButton from './Button.style';
import { ButtonPropsType } from './Button.types';

const Button: React.FC<ButtonPropsType> = (props) => (
  <StyledButton {...props} />
);

export default Button;
