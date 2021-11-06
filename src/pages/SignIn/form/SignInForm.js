import React from "react";
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
import {
  FormButtonSubmit,
  Form,
  QuestionLinkForgotWrapper,
} from "../SignIn.style";
import { toogleVisibility } from "../../../utils/toogleVisibility";
import { FormTitle } from "../../SignIn/SignIn.style";

const SignInForm = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        history.push("/patients");
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
              type={"password"}
              id={"passwordInput"}
              maxLength="30"
            />
            {touched.password && errors.password && (
              <InputErrorText type="password">{errors.password}</InputErrorText>
            )}
            <ShowPasswordIcon
              onClick={toogleVisibility.bind(null, "passwordInput")}
              id="passwordShowIcon"
            ></ShowPasswordIcon>
          </FormInputWrapperPassword>
          <FormButtonWrapper>
            <FormButtonSubmit
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Sign In
            </FormButtonSubmit>
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
