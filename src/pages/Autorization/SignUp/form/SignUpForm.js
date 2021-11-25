import React, { useState } from "react";
import { Formik } from "formik";

import { SignUpFormValidationsSchema } from "./SignUpFormValidationsSchema";
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
} from "../../common/common.style";
import { Form, FormTitle } from "../SignUp.style";
import { Button } from "../../../../components/Button/Button.style";
import { useHistory } from "react-router";
import { PATH } from "../../../../routes/routes";
import { useRegister } from "../../SignIn/form/redux/useRegister";

const SignUpForm = () => {
  const { register } = useRegister();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const history = useHistory();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
        const { confirmPassword, ...userData } = values;
        register(userData);
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
              isvalid={touched.userName && errors.userName}
              name={"userName"}
              type={"text"}
            />
            {touched.userName && errors.userName && (
              <InputErrorText>{errors.userName}</InputErrorText>
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
          <FormInputWrapperConfirmPasword>
            <FormInput
              isvalid={touched.confirmPassword && errors.confirmPassword}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              type={isShowConfirmPassword ? "text" : "password"}
              maxLength="30"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <InputErrorText>{errors.confirmPassword}</InputErrorText>
            )}
            <ShowPasswordIcon
              isShow={isShowConfirmPassword}
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
            ></ShowPasswordIcon>
            <div id="inputDescription"></div>
          </FormInputWrapperConfirmPasword>
          <FormButtonWrapper>
            <Button
              variant="primary"
              size="medium"
              width="146px"
              iconRight="arrow"
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
