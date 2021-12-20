import React, { useState } from 'react';
import { Formik } from 'formik';

import SignUpFormValidationsSchema from './SignUpFormValidationsSchema';
import {
  InputErrorText,
  FormButtonWrapper,
  FormInput,
  FormInputWrapperFirstName,
  FormInputWrapperLastName,
  FormInputWrapperEmail,
  FormInputWrapperPassword,
  FormInputWrapperConfirmPassword,
  ShowPasswordIcon,
} from '../../common/common.style';
import { Form, FormTitle } from '../SignUp.style';
import { Button } from '../../../../components/Button/Button';
import { useAuth } from '../../../../store/hooks/useAuth';
import { SignUpSubmitValues } from '../../common/common.types';
import dictionary from '../../../../common/dictionary';

const SignUpForm = () => {
  const { signUp } = useAuth();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const formikInitialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: SignUpSubmitValues) => {
    const { confirmPassword, ...userData } = values;
    signUp(userData);
  };

  return (
    <Formik
      initialValues={formikInitialValues}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={SignUpFormValidationsSchema}
    >
      {({
        errors, touched, handleSubmit, dirty, isValid,
      }) => (
        <Form>
          <FormTitle>{dictionary.authorizedPages.signUpTitle}</FormTitle>
          <FormInputWrapperFirstName>
            <FormInput
              placeholder={dictionary.placeholders.firstName}
              isvalid={touched.firstName && errors.firstName}
              name="firstName"
              type="text"
            />
            {touched.firstName && errors.firstName && (
              <InputErrorText>{errors.firstName}</InputErrorText>
            )}
          </FormInputWrapperFirstName>
          <FormInputWrapperLastName>
            <FormInput
              placeholder={dictionary.placeholders.lastName}
              isvalid={touched.lastName && errors.lastName}
              name="lastName"
              type="text"
            />
            {touched.lastName && errors.lastName && (
              <InputErrorText>{errors.lastName}</InputErrorText>
            )}
          </FormInputWrapperLastName>
          <FormInputWrapperEmail>
            <FormInput
              placeholder={dictionary.placeholders.email}
              isvalid={touched.userName && errors.userName}
              name="userName"
              type="text"
            />
            {touched.userName && errors.userName && (
              <InputErrorText>{errors.userName}</InputErrorText>
            )}
          </FormInputWrapperEmail>
          <FormInputWrapperPassword>
            <FormInput
              isvalid={touched.password && errors.password}
              name="password"
              placeholder={dictionary.placeholders.password}
              type={isShowPassword ? 'text' : 'password'}
              maxLength="30"
            />
            {touched.password && errors.password && (
              <InputErrorText type="password">{errors.password}</InputErrorText>
            )}
            <ShowPasswordIcon
              isShow={isShowPassword}
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          </FormInputWrapperPassword>
          <FormInputWrapperConfirmPassword>
            <FormInput
              isvalid={touched.confirmPassword && errors.confirmPassword}
              name="confirmPassword"
              placeholder={dictionary.placeholders.confirmPassword}
              type={isShowConfirmPassword ? 'text' : 'password'}
              maxLength="30"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <InputErrorText>{errors.confirmPassword}</InputErrorText>
            )}
            <ShowPasswordIcon
              isShow={isShowConfirmPassword}
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
            />
            <div id="inputDescription" />
          </FormInputWrapperConfirmPassword>
          <FormButtonWrapper>
            <Button
              variant="primary"
              size="medium"
              iconRight="arrow"
              disabled={!(isValid && dirty)}
              onClick={handleSubmit}
              type="submit"
              role="submit-button"
            >
              {dictionary.authorizedPages.signUpTitle}
            </Button>
          </FormButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
