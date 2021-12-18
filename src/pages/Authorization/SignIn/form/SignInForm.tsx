import React, { useState } from 'react';
import { Formik } from 'formik';
import SignInFormValidationsSchema from './SignInFormValidationsSchema';
import PATH from '../../../../routes/routes';
import {
  QuestionLink,
  InputErrorText,
  FormButtonWrapper,
  FormInput,
  FormInputWrapperEmail,
  FormInputWrapperPassword,
  ShowPasswordIcon,
} from '../../common/common.style';
import { Form, FormTitle, QuestionLinkForgotWrapper } from '../SignIn.style';
import Button from '../../../../components/Button/Button.style';
import { useAuth } from '../../../../store/hooks/useAuth';
import { SignInSubmitValues } from '../../common/common.types';
import dictionary from '../../../../common/dictionary';

const SignInForm = () => {
  const { signIn } = useAuth();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const formikInitialValues = {
    userName: '',
    password: '',
  };

  const handleSubmit = (values:SignInSubmitValues) => {
    signIn(values);
  };

  return (
    <Formik
      initialValues={formikInitialValues}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={SignInFormValidationsSchema}
    >
      {({
        errors, touched, handleSubmit, dirty, isValid,
      }) => (
        <Form>
          <FormTitle>{dictionary.authorizedPages.signInTitle}</FormTitle>

          <FormInputWrapperEmail>
            <FormInput
              placeholder={dictionary.placeholders.email}
              isvalid={touched.userName && errors.userName}
              name="userName"
              type="text"
            />
            {touched.userName && errors.userName && (
              <InputErrorText type="">{errors.userName}</InputErrorText>
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
          <FormButtonWrapper>
            <Button
              variant="primary"
              size="medium"
              width="138px"
              iconRight="arrow"
              disabled={!(isValid && dirty)}
              onClick={handleSubmit}
              type="submit"
              role="submit-button"
            >
              {dictionary.authorizedPages.signInTitle}
            </Button>
          </FormButtonWrapper>
          <QuestionLinkForgotWrapper>
            <QuestionLink to={PATH.RESTORE_PASSWORD}>
              {dictionary.authorizedPages.forgotLinkText}
            </QuestionLink>
          </QuestionLinkForgotWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
