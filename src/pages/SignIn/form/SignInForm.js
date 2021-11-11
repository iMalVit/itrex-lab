import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { SignInFormValidationsSchema } from "./SignInFormValidationsSchema";
import {
  QuestionLink,
  InputErrorText,
  FormButtonWrapper,
  FormInput,
  FormInputWrapperEmail,
  FormInputWrapperPassword,
  ShowPasswordIcon,
} from "../../common/styles/common.style";
import { Form, QuestionLinkForgotWrapper } from "../SignIn.style";
import { Button } from "../../common/styles/button.style";
import { FormTitle } from "../../SignIn/SignIn.style";

const SignInForm = () => {
  const history = useHistory();
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        history.push("/patients_doctor_view");
      }}
      validationSchema={SignInFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormTitle>Sign In</FormTitle>

          <FormInputWrapperEmail>
            <FormInput
              placeholder={"Email"}
              isvalid={touched.email && errors.email}
              name={"email"}
              type={"text"}
            />
            {touched.email && errors.email && (
              <InputErrorText>{errors.email}</InputErrorText>
            )}
          </FormInputWrapperEmail>

          <FormInputWrapperPassword>
            <FormInput
              isvalid={touched.password && errors.password}
              name={"password"}
              placeholder={"Password"}
              type={isShowPassword ? "text" : "password"}
              maxLength="30"
            />
            {touched.password && errors.password && (
              <InputErrorText type="password">{errors.password}</InputErrorText>
            )}
            <ShowPasswordIcon
              isShow={isShowPassword}
              onClick={() => setIsShowPassword(!isShowPassword)}
            ></ShowPasswordIcon>
          </FormInputWrapperPassword>
          <FormButtonWrapper>
            <Button
              primary
              medium
              width="138px"
              textAlign="start"
              iconRight
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Sign In
            </Button>
          </FormButtonWrapper>
          <QuestionLinkForgotWrapper>
            <QuestionLink to="restore_password">Forgot Password?</QuestionLink>
          </QuestionLinkForgotWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
