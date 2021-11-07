import React from "react";
import { Formik } from "formik";
import { SignUpFormValidationsSchema } from "./SignUpFormValidationsSchema";
import { toogleVisibility } from "../../../utils/toogleVisibility";
import {
  InputErrorText,
  FormButtonWrapper,
  FormInput,
  FormInputWrapperFirstName,
  FormInputWrapperLastName,
  FormInputWrapperEmail,
  FormInputWrapperPassword,
  FormInputWrapperConfirmPasword,
  ShowPasswordIcon,
} from "../../common/styles/common.style";
import { Form, FormTitle } from "../SignUp.style";
import { Button } from "../../common/styles/button.style";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={SignUpFormValidationsSchema}
    >
      {({ values, errors, touched, handleSubmit, dirty, isValid }) => (
        <Form>
          <FormTitle>Sign Up</FormTitle>
          <FormInputWrapperFirstName>
            <FormInput
              placeholder={"First Name"}
              isvalid={touched.firstName && errors.firstName}
              name={"firstName"}
              type={"text"}
            />
            {touched.firstName && errors.firstName && (
              <InputErrorText>{errors.firstName}</InputErrorText>
            )}
          </FormInputWrapperFirstName>
          <FormInputWrapperLastName>
            <FormInput
              placeholder={"Last Name"}
              isvalid={touched.lastName && errors.lastName}
              name={"lastName"}
              type={"text"}
            />
            {touched.lastName && errors.lastName && (
              <InputErrorText>{errors.lastName}</InputErrorText>
            )}
          </FormInputWrapperLastName>
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
              className="form__show-password-icon"
              id="passwordShowIcon"
            ></ShowPasswordIcon>
          </FormInputWrapperPassword>
          <FormInputWrapperConfirmPasword>
            <FormInput
              isvalid={touched.confirmPassword && errors.confirmPassword}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={"password"}
              id={"confirmPasswordInput"}
              maxLength="30"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <InputErrorText>{errors.confirmPassword}</InputErrorText>
            )}
            <ShowPasswordIcon
              onClick={toogleVisibility.bind(null, "confirmPasswordInput")}
              id="passwordShowIcon"
            ></ShowPasswordIcon>
            <div
              className="form__password-description"
              id="inputDescription"
            ></div>
          </FormInputWrapperConfirmPasword>
          <FormButtonWrapper>
            <Button
              primary
              medium
              width="146px"
              textAlign="start"
              iconRight
              disabled={!isValid && dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Sign Up
            </Button>
          </FormButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
