/* eslint-disable no-unused-vars */
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
import { useLogin } from '../../../../store/hooks/useLogin';

const SignInForm = () => {
  const { signIn } = useLogin();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={(values) => {
        signIn(values);
      }}
      validationSchema={SignInFormValidationsSchema}
    >
      {({
        values, errors, touched, handleSubmit, dirty, isValid,
      }) => (
        <Form>
          <FormTitle>Sign In</FormTitle>

          <FormInputWrapperEmail>
            <FormInput
              placeholder="Email"
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
              placeholder="Password"
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
              // eslint-disable-next-line jsx-a11y/aria-role
              role="submit-button"
            >
              Sign In
            </Button>
          </FormButtonWrapper>
          <QuestionLinkForgotWrapper>
            <QuestionLink to={PATH.RESTORE_PASSWORD}>
              Forgot Password?
            </QuestionLink>
          </QuestionLinkForgotWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
